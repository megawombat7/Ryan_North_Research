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
<div markdown="0">
  <details class="pub-abstract">
    <summary>Abstract</summary>
    <div class="pub-abstract-body">
      {{ pub.abstract }}
    </div>
  </details>
</div>
{% endif %}

<hr>

{% endif %}
{% endfor %}

## Conference Abstracts

{% for pub in pubs_sorted %}
{% if pub.type == "abstract" %}

### {{ pub.title }}

{{ pub.authors }}  
*{{ pub.journal }}* ({{ pub.year }})

{% endif %}
{% endfor %}
