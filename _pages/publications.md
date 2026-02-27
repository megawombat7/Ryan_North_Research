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

<div class="pub-entry">
  <h3 class="pub-title">{{ pub.title }}</h3>

  <div class="pub-meta">
    {{ pub.authors }}<br>
    <em>{{ pub.journal }}</em> ({{ pub.year }})<br>
    <span class="pub-links">
      {% if pub.doi and pub.doi != "" %}<a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">DOI</a>{% endif %}
      {% if pub.url and pub.url != "" %}{% if pub.doi and pub.doi != "" %} · {% endif %}<a href="{{ pub.url }}" target="_blank" rel="noopener">Publisher link</a>{% endif %}
      {% if pub.pdf and pub.pdf != "" %}{% if (pub.doi and pub.doi != "") or (pub.url and pub.url != "") %} · {% endif %}<a href="{{ site.baseurl }}{{ pub.pdf }}" target="_blank" rel="noopener">PDF</a>{% endif %}
    </span>
  </div>

  {% if pub.abstract and pub.abstract != "" %}
    <a class="pub-abstract-toggle" data-toggle="collapse" href="#abs-{{ forloop.index }}" role="button" aria-expanded="false" aria-controls="abs-{{ forloop.index }}">
      Abstract
    </a>

    <div class="collapse pub-abstract-body" id="abs-{{ forloop.index }}">
      <p>{{ pub.abstract }}</p>
    </div>
  {% endif %}
</div>

<div class="section-divider"></div>

{% endif %}
{% endfor %}

---

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
