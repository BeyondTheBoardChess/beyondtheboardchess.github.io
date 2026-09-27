{%- comment -%}
  Every figure here comes from _data/checks.json, which the corpus writes after each check of
  the games (DA-456). Nothing in this file is a figure, so adding a month changes nothing here.
{%- endcomment -%}
{%- assign checks = site.data.checks -%}
## {{ site.data.words.months_heading | escape }}

{% if checks.say.failing %}{{ checks.say.failing }}

{% endif %}<details markdown="1">
<summary><b>{% if checks.say.summary %}{{ checks.say.summary | escape }}{% else %}{{ site.data.words.months_summary_bold | escape }}{% endif %}</b> {{ site.data.words.months_summary_rest | escape }}</summary>

<p><a class="rd-btn rd-download" href="#" download="lichess-months-and-fingerprints.csv" hidden>{{ site.data.words.months_download | escape }}</a></p>

| Month | Games Lichess published | Games I have | How many were checked | How many were wrong | Fingerprint of the file |
| --- | ---: | ---: | --- | ---: | --- |
{% for row in checks.rows %}| {% if row.passed %}{{ row.month }}{% else %}**{{ row.month }}**{% endif %} | {{ row.published }} | {{ row.stored }} | {{ row.checked }} | {{ row.wrong }} | {% if row.fingerprint %}<span class="rd-fp" tabindex="0" role="button" title="{{ row.fingerprint }} (click to see it in full and copy it)"><span class="rd-fp-a">{{ row.head }}</span><span class="rd-fp-b">{{ row.tail }}</span></span>{% else %}{{ site.data.words.months_no_fingerprint | escape }}{% endif %} |
{% endfor %}
</details>
