---
title: "Ryan North - Home"
layout: textlay
sitemap: false
permalink: /
---

<div markdown="0">

<style>
  .hero-banner img{
    width:100%;
    height:260px;
    object-fit:cover;
    display:block;
    border-radius:10px;
  }
  .home-wrap{
    max-width:1100px;
    margin:40px auto 0 auto;
    display:flex;
    gap:48px;
    align-items:flex-start;
    padding:0 20px;
  }
  .home-left{
    flex:2;
  }
  .home-left h1{
    margin:0 0 14px 0;
    font-size:2.4rem;
    font-weight:600;
  }
  .home-left p{
    line-height:1.65;
    font-size:1.05rem;
    margin:0 0 14px 0;
  }
  .home-links a{
    text-decoration:none;
    margin-right:10px;
  }
  .home-right{
    flex:1;
    display:flex;
    justify-content:flex-end;
  }
  .home-right img{
    width:100%;
    max-width:280px;
    border-radius:12px;
    display:block;
    filter:grayscale(100%);
  }

  @media (max-width: 900px){
    .hero-banner img{ height:200px; }
    .home-wrap{
      flex-direction:column;
      align-items:flex-start;
    }
    .home-right{
      justify-content:flex-start;
      margin-top:12px;
    }
  }
</style>

<div class="hero-banner">
  <img src="{{ '/assets/home/banner_DNA_Mountains.png' | relative_url }}" alt="DNA Mountains Banner">
</div>

<div class="home-wrap">

  <div class="home-left">
    <h1>Ryan North</h1>

    <p>
      I’m a researcher interested in neuroskeletal biology - how peripheral nerves interface with bone, vasculature,
      and immune microenvironments - and how these relationships evolve across vertebrate lineages.
    </p>

    <p>
      This site is a home for my research, writing, and ongoing projects.
    </p>

    <p><strong>Email:</strong> ryanjamesnorth@gmail.com</p>

    <p class="home-links">
      <a href="#" target="_blank" rel="noopener">Google Scholar</a> ·
      <a href="#" target="_blank" rel="noopener">ORCID</a> ·
      <a href="#" target="_blank" rel="noopener">GitHub</a>
    </p>
  </div>

  <div class="home-right">
    <img src="{{ '/assets/home/Ryan_photo.jpg' | relative_url }}" alt="Ryan North">
  </div>

</div>

</div>
