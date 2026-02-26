---
title: "Fishing"
layout: textlay
permalink: /fishing/
---

# Fishing

I’m an avid fisherman who loves fly fishing across Montana, Idaho, and Wyoming.  
From drifting western rivers to hiking into alpine lakes or drilling through winter ice, time on the water is where I recharge.

---

## Me

A few snapshots from days that were as memorable for the places as for the fish.

<div markdown="0" class="row">
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/me/front_me_fishing.jpg" class="img-responsive img-rounded zoomable" alt="Fishing photo">
  </div>
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/me/me_fishing.jpg" class="img-responsive img-rounded zoomable" alt="Fishing photo">
  </div>
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/me/raft.jpg" class="img-responsive img-rounded zoomable" alt="Fishing photo">
  </div>
</div>

<hr>

## Rivers

I gravitate toward rivers most — reading seams, covering miles of water, and chasing trout in constantly changing conditions.

<div markdown="0" class="row">
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/Rivers/big_jaw_river_rainbow_dark.jpg" class="img-responsive img-rounded zoomable" alt="River fishing photo">
  </div>
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/Rivers/bright_colored_cutthroat.jpg" class="img-responsive img-rounded zoomable" alt="River fishing photo">
  </div>
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/Rivers/gallatin_canyon.jpg" class="img-responsive img-rounded zoomable" alt="River fishing photo">
  </div>
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/Rivers/river_brown.jpg" class="img-responsive img-rounded zoomable" alt="River fishing photo">
  </div>
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/Rivers/river_rainbow.jpg" class="img-responsive img-rounded zoomable" alt="River fishing photo">
  </div>
</div>

<hr>

## Lakes

Stillwater fishing brings a slower pace — long casts, clear water, and incredible alpine settings.

<div markdown="0" class="row">
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/Lakes/IMG_20250824_112216.jpg" class="img-responsive img-rounded zoomable" alt="Lake fishing photo">
  </div>
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/Lakes/close_up_mountain_lake_cutthroat.jpg" class="img-responsive img-rounded zoomable" alt="Lake fishing photo">
  </div>
</div>

<hr>

## Ice Fishing

When winter sets in, the fishing just changes format — quieter, colder, and just as rewarding.

<div markdown="0" class="row">
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/ice_fishing/Ice_Fishing_Hole.jpg" class="img-responsive img-rounded zoomable" alt="Ice fishing photo">
  </div>
  <div class="col-sm-4">
    <img src="{{ site.baseurl }}/assets/fishing/ice_fishing/ice_fishing_dark_rainbows.jpg" class="img-responsive img-rounded zoomable" alt="Ice fishing photo">
  </div>
</div>

<!-- Image Modal -->
<div markdown="0">
  <div id="imgModal" class="img-modal">
    <span class="img-close">&times;</span>
    <img class="img-modal-content" id="modalImage">
  </div>

  <script>
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".img-close");

    document.querySelectorAll(".zoomable").forEach(img => {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
      });
    });

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    modal.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  });
  </script>
</div>
