---
title: "Fishing"
layout: textlay
permalink: /fishing/
---

# Fishing

<div class="page-intro">
  <p>
    I’m an avid fisherman who loves fly fishing across Montana, Idaho, and Wyoming.
    From drifting western rivers to hiking into alpine lakes or drilling through winter ice,
    time on the water is where I recharge.
  </p>
</div>

{% assign exts = ".jpg,.jpeg,.png,.webp" | split: "," %}

{% comment %} ---------- ME ---------- {% endcomment %}
<section class="gallery-section">
  <h2>Me</h2>
  <p class="section-subtitle">A few snapshots from days that were as memorable for the places as for the fish.</p>

  {% assign me_imgs = site.static_files | where_exp: "f", "f.path contains '/assets/fishing/me/'" %}
  {% assign me_imgs = me_imgs | where_exp: "f", "exts contains f.extname" %}
  {% assign me_imgs = me_imgs | sort: "name" %}

  <div class="gallery-grid" markdown="0">
    {% for img in me_imgs %}
      <button class="gallery-item zoomable" type="button" data-full="{{ img.path | relative_url }}">
        <img src="{{ img.path | relative_url }}" alt="Fishing photo">
      </button>
    {% endfor %}
  </div>
</section>

<hr>

{% comment %} ---------- RIVERS ---------- {% endcomment %}
<section class="gallery-section">
  <h2>Rivers</h2>
  <p class="section-subtitle">I gravitate toward rivers most — reading seams, covering miles of water, and chasing trout in constantly changing conditions.</p>

  {% assign river_imgs = site.static_files | where_exp: "f", "f.path contains '/assets/fishing/Rivers/'" %}
  {% assign river_imgs = river_imgs | where_exp: "f", "exts contains f.extname" %}
  {% assign river_imgs = river_imgs | sort: "name" %}

  <div class="gallery-grid" markdown="0">
    {% for img in river_imgs %}
      <button class="gallery-item zoomable" type="button" data-full="{{ img.path | relative_url }}">
        <img src="{{ img.path | relative_url }}" alt="River fishing photo">
      </button>
    {% endfor %}
  </div>
</section>

<hr>

{% comment %} ---------- LAKES ---------- {% endcomment %}
<section class="gallery-section">
  <h2>Lakes</h2>
  <p class="section-subtitle">Stillwater fishing brings a slower pace — long casts, clear water, and incredible alpine settings.</p>

  {% assign lake_imgs = site.static_files | where_exp: "f", "f.path contains '/assets/fishing/Lakes/'" %}
  {% assign lake_imgs = lake_imgs | where_exp: "f", "exts contains f.extname" %}
  {% assign lake_imgs = lake_imgs | sort: "name" %}

  <div class="gallery-grid" markdown="0">
    {% for img in lake_imgs %}
      <button class="gallery-item zoomable" type="button" data-full="{{ img.path | relative_url }}">
        <img src="{{ img.path | relative_url }}" alt="Lake fishing photo">
      </button>
    {% endfor %}
  </div>
</section>

<hr>

{% comment %} ---------- ICE FISHING ---------- {% endcomment %}
<section class="gallery-section">
  <h2>Ice Fishing</h2>
  <p class="section-subtitle">When winter sets in, the fishing just changes format — quieter, colder, and just as rewarding.</p>

  {% assign ice_imgs = site.static_files | where_exp: "f", "f.path contains '/assets/fishing/ice_fishing/'" %}
  {% assign ice_imgs = ice_imgs | where_exp: "f", "exts contains f.extname" %}
  {% assign ice_imgs = ice_imgs | sort: "name" %}

  <div class="gallery-grid" markdown="0">
    {% for img in ice_imgs %}
      <button class="gallery-item zoomable" type="button" data-full="{{ img.path | relative_url }}">
        <img src="{{ img.path | relative_url }}" alt="Ice fishing photo">
      </button>
    {% endfor %}
  </div>
</section>

<!-- Image Modal -->
<div markdown="0">
  <div id="imgModal" class="img-modal" aria-hidden="true">
    <button class="img-close" type="button" aria-label="Close">&times;</button>
    <img class="img-modal-content" id="modalImage" alt="Enlarged fishing photo">
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const modal = document.getElementById("imgModal");
      const modalImg = document.getElementById("modalImage");
      const closeBtn = document.querySelector(".img-close");

      document.querySelectorAll(".zoomable").forEach(el => {
        el.addEventListener("click", function () {
          const full = this.getAttribute("data-full");
          modal.style.display = "flex";
          modalImg.src = full;
          modal.setAttribute("aria-hidden", "false");
        });
      });

      function closeModal() {
        modal.style.display = "none";
        modalImg.src = "";
        modal.setAttribute("aria-hidden", "true");
      }

      closeBtn.addEventListener("click", closeModal);

      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeModal();
      });
    });
  </script>
</div>
