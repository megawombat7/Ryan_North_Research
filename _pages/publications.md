---
title: "Publications"
layout: textlay
permalink: /publications/
---

# Publications

{% assign pubs_sorted = site.data.publist | sort: "year" | reverse %}

<div markdown="0">

<h2>Peer-reviewed Articles</h2>

{% for pub in pubs_sorted %}
{% if pub.type == "article" %}

<div class="pub-item">

  {% if pub.thumb %}
  <div class="pub-thumb">
    <img src="{{ pub.thumb | relative_url }}" alt="Publication figure">
  </div>
  {% endif %}

  <div class="pub-content">

    <div class="pub-title">
      {% if pub.url and pub.url != "" %}
        <a href="{{ pub.url }}" target="_blank" rel="noopener">{{ pub.title }}</a>
      {% else %}
        {{ pub.title }}
      {% endif %}
    </div>

    <div class="pub-authors">
      {{ pub.authors }}
    </div>

    <div class="pub-journal">
      <em>{{ pub.journal }}</em> ({{ pub.year }})
    </div>

    <div class="pub-links">
      {% if pub.doi and pub.doi != "" %}
        <a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">DOI</a>
      {% endif %}
      {% if pub.url and pub.url != "" %}
        {% if pub.doi and pub.doi != "" %} · {% endif %}
        <a href="{{ pub.url }}" target="_blank" rel="noopener">Publisher Link</a>
      {% endif %}
    </div>

    {% if pub.abstract and pub.abstract != "" %}
    <details class="pub-abstract">
      <summary>Abstract</summary>
      <div class="pub-abstract-body">
        {{ pub.abstract | newline_to_br }}
      </div>
    </details>
    {% endif %}

  </div>
</div>

{% endif %}
{% endfor %}

<h2>Conference Abstracts</h2>

{% for pub in pubs_sorted %}
{% if pub.type == "abstract" %}

<div class="pub-item">

  {% if pub.thumb %}
  <div class="pub-thumb">
    <img src="{{ pub.thumb | relative_url }}" alt="Publication figure">
  </div>
  {% endif %}

  <div class="pub-content">
    <div class="pub-title">{{ pub.title }}</div>
    <div class="pub-authors">{{ pub.authors }}</div>
    <div class="pub-journal"><em>{{ pub.journal }}</em> ({{ pub.year }})</div>

    {% if pub.abstract and pub.abstract != "" %}
    <details class="pub-abstract">
      <summary>Abstract</summary>
      <div class="pub-abstract-body">
        {{ pub.abstract | newline_to_br }}
      </div>
    </details>
    {% endif %}
  </div>

</div>

{% endif %}
{% endfor %}

</div>
