---
title: "Publications"
layout: textlay
permalink: /publications/
---

# Publications

{% assign pubs_sorted = site.data.publist | sort: "year" | reverse %}

{% assign pubs_sorted = site.data.publist | sort: "year" | reverse %}

## Peer-reviewed Articles
{% for pub in pubs_sorted %}
{% if pub.type == "article" %}
<div class="pub-entry">

<strong>{{ pub.title }}</strong><br>
{{ pub.authors }}<br>
<em>{{ pub.journal }}</em> ({{ pub.year }})

{% if pub.doi %}
 — <a href="https://doi.org/{{ pub.doi }}" target="_blank">DOI</a>
{% endif %}

{% if pub.url %}
 — <a href="{{ pub.url }}" target="_blank">Publisher Link</a>
{% endif %}

{% if pub.abstract and pub.abstract != "" %}
<details class="pub-abstract">
  <summary>Abstract</summary>
  <p>{{ pub.abstract }}</p>
</details>
{% endif %}

</div>
{% endif %}
{% endfor %}

## Conference Abstracts
<ul class="pub-list">
{% for pub in pubs_sorted %}
{% if pub.type == "abstract" %}
<li>
  <strong>{{ pub.title }}</strong><br>
  {{ pub.authors }}<br>
  <em>{{ pub.journal }}</em> ({{ pub.year }})
  {% if pub.url and pub.url != "" %}
    — <a href="{{ pub.url }}" target="_blank">Link</a>
  {% endif %}
  {% if pub.pdf and pub.pdf != "" %}
    — <a href="{{ site.baseurl }}{{ pub.pdf }}">PDF</a>
  {% endif %}
</li>
{% endif %}
{% endfor %}
</ul>
