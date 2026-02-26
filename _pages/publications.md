---
title: "Publications"
layout: textlay
permalink: /publications/
---

# Publications

{% assign articles = site.data.publist | where: "type", "article" %}
{% assign preprints = site.data.publist | where: "type", "preprint" %}

## Peer-reviewed Articles

{% for pub in articles %}
<div style="margin-bottom: 1.2em;">
  <strong>{{ pub.title }}</strong><br>
  {{ pub.authors }}<br>
  <em>{{ pub.journal }}</em>, {{ pub.year }}.<br>
  {% if pub.doi != "" %}
    DOI: <a href="https://doi.org/{{ pub.doi }}">{{ pub.doi }}</a>
  {% endif %}
  {% if pub.url %}
    <a href="{{ pub.url }}">[Link]</a>
  {% endif %}
</div>
{% endfor %}

## Preprints

{% for pub in preprints %}
<div style="margin-bottom: 1.2em;">
  <strong>{{ pub.title }}</strong><br>
  {{ pub.authors }}<br>
  <em>{{ pub.journal }}</em>, {{ pub.year }}.<br>
  <a href="{{ pub.url }}">[Link]</a>
</div>
{% endfor %}
