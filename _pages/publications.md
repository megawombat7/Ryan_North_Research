---
title: "Publications"
layout: textlay
permalink: /publications/
---

# Publications

{% assign pubs_sorted = site.data.publist | sort: "year" | reverse %}

## Peer-reviewed Articles
{% for pub in pubs_sorted %}
{% if pub.type == "article" %}
<div style="margin-bottom: 1.1em;">
  <strong>{{ pub.title }}</strong><br>
  {{ pub.authors }}<br>
  <em>{{ pub.journal }}</em> ({{ pub.year }})
  {% if pub.doi and pub.doi != "" %}
    — DOI: <a href="https://doi.org/{{ pub.doi }}">{{ pub.doi }}</a>
  {% endif %}
  {% if pub.url and pub.url != "" %}
    — <a href="{{ pub.url }}">Publisher link</a>
  {% endif %}
  {% if pub.pdf and pub.pdf != "" %}
    — <a href="{{ site.baseurl }}{{ pub.pdf }}">PDF</a>
  {% endif %}
</div>
{% endif %}
{% endfor %}

## Conference Abstracts
{% for pub in pubs_sorted %}
{% if pub.type == "abstract" %}
<div style="margin-bottom: 1.1em;">
  <strong>{{ pub.title }}</strong><br>
  {{ pub.authors }}<br>
  <em>{{ pub.journal }}</em> ({{ pub.year }})
  {% if pub.url and pub.url != "" %}
    — <a href="{{ pub.url }}">Link</a>
  {% endif %}
  {% if pub.pdf and pub.pdf != "" %}
    — <a href="{{ site.baseurl }}{{ pub.pdf }}">PDF</a>
  {% endif %}
</div>
{% endif %}
{% endfor %}
