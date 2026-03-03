---
title: "About"
layout: textlay
permalink: /about/
---

<div markdown="0">

<style>
  /* Header block with photo + title */
  .about-hero{
    max-width: 1100px;
    margin: 10px auto 30px auto;
    display: flex;
    gap: 28px;
    align-items: center;
    padding: 0 20px;
  }
  .about-hero img{
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 10px 28px rgba(0,0,0,0.35);
  }
  .about-hero h1{
    margin: 0;
    font-size: 3.0rem;
    font-weight: 650;
    letter-spacing: 0.2px;
  }

  /* Section layout */
  .about-section{
    max-width: 1100px;
    margin: 0 auto 34px auto;
    padding: 0 20px;
  }
  .about-section h2{
    margin: 26px 0 12px 0;
    font-size: 1.9rem;
    font-weight: 650;
  }
  .about-section p{
    font-size: 1.12rem;
    line-height: 1.75;
    color: rgba(255,255,255,0.86);
    margin: 0 0 14px 0;
  }

  /* Image grid for personal section */
  .about-grid{
    display: grid;
    grid-template-columns: 1.25fr 1fr 1fr;
    gap: 16px;
    margin: 14px 0 10px 0;
  }
  .about-grid img{
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 14px;
    box-shadow: 0 10px 26px rgba(0,0,0,0.28);
    display: block;
  }

  /* Make it responsive */
  @media (max-width: 900px){
    .about-hero{
      flex-direction: column;
      align-items: flex-start;
    }
    .about-hero img{
      width: 130px;
      height: 130px;
    }
    .about-hero h1{
      font-size: 2.4rem;
    }
    .about-grid{
      grid-template-columns: 1fr;
    }
    .about-grid img{
      height: 240px;
    }
  }
</style>

<div class="about-hero">
  <img src="{{ '/assets/about/me_chillin.jpg' | relative_url }}" alt="Ryan relaxing">
  <h1>About</h1>
</div>

<div class="about-section">

  <h2>Personal</h2>
  <p>
    insert text here
  </p>

  <div class="about-grid">
    <img src="{{ '/assets/about/me_mountain.jpg' | relative_url }}" alt="Ryan in the mountains">
    <img src="{{ '/assets/about/montana.jpg' | relative_url }}" alt="Montana landscape">
    <img src="{{ '/assets/about/montana_2.jpg' | relative_url }}" alt="Montana landscape 2">
  </div>

  <h2>Research</h2>
  <p>
    insert text here
  </p>

  <h2>Professional development</h2>
  <p>
    insert text here
  </p>

</div>

</div>
