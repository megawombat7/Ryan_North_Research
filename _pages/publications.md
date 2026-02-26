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

### {{ pub.title }}

{{ pub.authors }}  
*{{ pub.journal }}* ({{ pub.year }})  
{% if pub.doi and pub.doi != "" %}[DOI](https://doi.org/{{ pub.doi }}){% endif %}{% if pub.url and pub.url != "" %} · [Publisher link]({{ pub.url }}){% endif %}

{% if pub.abstract and pub.abstract != "" %}
<details class="pub-abstract">
  <summary>Abstract</summary>
  <div class="pub-abstract-body">
    <p>{{ pub.abstract | escape }}</p>
  </div>
</details>
{% endif %}

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
