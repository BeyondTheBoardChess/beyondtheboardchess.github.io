// Proves that a save from the site's edit pencil (Pages CMS, set up in /.pages.yml) leaves
// every page exactly as it was, so the only thing a save can change is the words Rainy typed.
//
// Pages CMS rewrites a whole page on every save: it reads the front matter, runs the body
// through its rich-text editor (Tiptap, with the extensions below, copied from Pages CMS's
// components/ui/editor/index.tsx), and writes both back. Raw HTML such as <details> or <br>
// does not survive that, so it belongs in the page frame or an include, never in a page body.
//
// Run it with `npm run check` in this folder. It exits non-zero and names the page on failure.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";
import YAML from "yaml";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
for (const key of ["window", "document", "navigator", "Node", "HTMLElement", "DOMParser", "getComputedStyle", "MutationObserver", "Element", "Text", "DocumentFragment"]) {
  Object.defineProperty(globalThis, key, { value: dom.window[key], configurable: true, writable: true });
}
const { Editor } = await import("@tiptap/core");
const StarterKit = (await import("@tiptap/starter-kit")).default;
const Underline = (await import("@tiptap/extension-underline")).default;
const Link = (await import("@tiptap/extension-link")).default;
const Image = (await import("@tiptap/extension-image")).default;
const { Table } = await import("@tiptap/extension-table");
const TableRow = (await import("@tiptap/extension-table-row")).default;
const TableHeader = (await import("@tiptap/extension-table-header")).default;
const TableCell = (await import("@tiptap/extension-table-cell")).default;
const { Markdown } = await import("@tiptap/markdown");

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const COMMIT_MESSAGE = "Edited verbiage on site";
const failures = [];
const fail = (message) => failures.push(message);

// Jekyll's default slugify: the pencil on a page opens the editor entry named for its path.
const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// The rich-text editor's save, exactly as Pages CMS runs it on a markdown body.
const richTextSave = (body) => {
  const editor = new Editor({
    extensions: [
      StarterKit.configure({ link: false, underline: false }),
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
      Table,
      TableRow,
      TableHeader,
      TableCell,
      Markdown,
    ],
    content: body,
    contentType: "markdown",
  });
  const markdown = editor.getMarkdown();
  editor.destroy();
  return markdown;
};

// Pages CMS's lib/serialization.ts: how it splits a page into front matter and body.
const parseFrontMatter = (content) => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n([\s\S]*))?$/.exec(content);
  if (!match) return null;
  const data = match[1].trim() ? YAML.parse(match[1]) : {};
  return { data, body: (match[2] || "").replace(/^\r?\n/, "") };
};

// ...and how it writes one back.
const stringifyFrontMatter = (data, body) => {
  let frontMatter = YAML.stringify(data);
  frontMatter = frontMatter.trim() ? frontMatter.trim() + "\n" : "";
  return `---\n${frontMatter}---\n${body}`;
};

const config = YAML.parse(fs.readFileSync(path.join(SITE, ".pages.yml"), "utf8"));

// 1. Every save leaves the history note Rainy chose.
for (const action of ["create", "update", "delete", "rename"]) {
  if (config.settings?.commit?.templates?.[action] !== COMMIT_MESSAGE) {
    fail(`.pages.yml: a ${action} must leave the note "${COMMIT_MESSAGE}"`);
  }
}
if (config.settings?.content?.merge !== true) {
  fail(".pages.yml: settings.content.merge must be true, or a save drops the settings the editor does not show");
}

const entries = (config.content || []).flatMap((entry) => (entry.type === "group" ? entry.items : [entry]));
const byPath = new Map(entries.map((entry) => [entry.path, entry]));

// 2. Every page on the site has an editor entry, named so its pencil finds it.
const pages = [];
const walk = (dir) => {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.name.startsWith("_") || item.name.startsWith(".") || item.name === "node_modules") continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full);
    else if (item.name.endsWith(".md")) pages.push(path.relative(SITE, full).split(path.sep).join("/"));
  }
};
walk(SITE);
for (const page of pages) {
  const entry = byPath.get(page);
  if (!entry) { fail(`${page}: no entry in .pages.yml, so its pencil opens nothing`); continue; }
  if (entry.name !== slugify(page)) fail(`${page}: its .pages.yml entry must be named "${slugify(page)}" for the pencil to find it`);
}

// 3. A save from the editor rewrites nothing the reader would see, on every page.
for (const entry of entries) {
  const file = path.join(SITE, entry.path);
  if (!fs.existsSync(file)) { fail(`.pages.yml: ${entry.path} does not exist`); continue; }
  // GitHub holds these with plain line ends; a Windows checkout may not.
  const original = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");

  if (entry.format === "yaml-frontmatter") {
    const parsed = parseFrontMatter(original);
    if (!parsed || !Object.keys(parsed.data).length) {
      fail(`${entry.path}: needs front matter with at least one setting, or the editor's first save leaves one it cannot read back`);
      continue;
    }
    // GitHub Pages only turns README.md into the front page while it has no front matter.
    if (entry.path === "README.md" && parsed.data.permalink !== "/") {
      fail("README.md: needs `permalink: /` in its front matter, or the site loses its front page");
    }
    const declared = new Set((entry.fields || []).map((field) => field.name));
    for (const key of Object.keys(parsed.data)) {
      if (!declared.has(key)) fail(`${entry.path}: front matter "${key}" is not a field in .pages.yml`);
    }
    const bodyField = (entry.fields || []).find((field) => field.name === "body");
    if (bodyField?.type !== "rich-text" || bodyField.options?.format !== "markdown") {
      fail(`${entry.path}: its body must be a markdown rich-text field`);
    }
    // The editor shows each line of a paragraph on its own line, and once Rainy types in that
    // paragraph it saves those line ends as real line breaks the site then shows (his first
    // save, 2026-09-26). So a paragraph is one line; a break he wants ends in two spaces.
    const blocks = parsed.body.split(/\n\s*\n/);
    for (const block of blocks) {
      const lines = block.trimEnd().split("\n");
      if (/^\s*(#|\d+\.\s|[-*+]\s|\||<|```|>|\{)/.test(lines[0])) continue;
      const soft = lines.slice(0, -1).findIndex((line) => !line.endsWith("  "));
      if (soft >= 0) fail(`${entry.path}: the paragraph starting "${lines[0].slice(0, 50)}" runs over several lines; put it on one line, or editing it splits it on the page`);
    }
    const saved = stringifyFrontMatter(parsed.data, richTextSave(parsed.body));
    if (saved.trimEnd() !== original.trimEnd()) {
      const a = original.trimEnd().split("\n");
      const b = saved.trimEnd().split("\n");
      const line = a.findIndex((text, i) => text !== b[i]);
      fail(`${entry.path}: a save would rewrite line ${line + 1}\n    now:        ${JSON.stringify(a[line])}\n    after save: ${JSON.stringify(b[line])}`);
    }
  } else if (entry.format === "yaml") {
    const data = YAML.parse(original);
    if (JSON.stringify(YAML.parse(YAML.stringify(data))) !== JSON.stringify(data)) {
      fail(`${entry.path}: a save would change its values`);
    }
    // Keys the editor does not show survive a save at the top level (merge), but a list is
    // written back whole and each item keeps only its declared fields.
    for (const field of entry.fields || []) {
      if (field.type !== "object" || !field.list) continue;
      const declared = new Set((field.fields || []).map((sub) => sub.name));
      for (const [i, item] of (data?.[field.name] || []).entries()) {
        for (const key of Object.keys(item || {})) {
          if (!declared.has(key)) fail(`${entry.path}: ${field.name} item ${i + 1} has "${key}", which a save would delete; declare it in .pages.yml`);
        }
      }
    }
  } else {
    fail(`${entry.path}: format "${entry.format}" is not one this check knows is safe`);
  }
}

// 4. Every word the page frame shows comes from the words list, and the editor shows each one.
const frame = [path.join(SITE, "_layouts/default.html"), ...fs.readdirSync(path.join(SITE, "_includes")).filter((name) => name.endsWith(".md") || name.endsWith(".html")).map((name) => path.join(SITE, "_includes", name))]
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");
const wordsEntry = entries.find((entry) => entry.path === "_data/words.yml");
const words = YAML.parse(fs.readFileSync(path.join(SITE, "_data/words.yml"), "utf8"));
const wordFields = new Set((wordsEntry?.fields || []).map((field) => field.name));
for (const [, key] of frame.matchAll(/site\.data\.words\.([a-z_]+)/g)) {
  if (typeof words[key] !== "string" || !words[key]) fail(`_data/words.yml: "${key}" is used by the page frame but has no words`);
  if (!wordFields.has(key)) fail(`.pages.yml: the words list does not show "${key}"`);
}
for (const key of Object.keys(words)) {
  if (!frame.includes(`site.data.words.${key}`)) fail(`_data/words.yml: "${key}" is not shown anywhere on the site`);
}

if (failures.length) {
  console.error(`The edit pencil is not safe to use:\n\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log(`The edit pencil is safe: ${entries.length} editor entries, ${pages.length} pages, every save leaves the page as it was.`);
