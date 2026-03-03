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
    height:280px;
    object-fit:cover;
    display:block;
    border-radius:14px;
    box-shadow: 0 12px 34px rgba(0,0,0,0.35);
  }

  .home-wrap{
    max-width:1150px;
    margin:46px auto 0 auto;
    display:flex;
    gap:56px;
    align-items:center;
    padding:0 24px;
  }

  /* LEFT = photo */
  .home-right{
    flex:0 0 320px;
    display:flex;
    justify-content:flex-start;
  }
  .home-right img{
    width:320px;
    height:auto;
    border-radius:16px;
    display:block;
    filter:none;
    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
  }

  /* RIGHT = text */
  .home-left{
    flex:1;
    max-width:680px;
  }
  .home-left h1{
    margin:0 0 16px 0;
    font-size:3.0rem;
    font-weight:650;
    letter-spacing:0.2px;
  }
  .home-left p{
    line-height:1.75;
    font-size:1.18rem;
    margin:0 0 18px 0;
    color: rgba(255,255,255,0.86);
  }
  .home-left strong{
    color: rgba(255,255,255,0.95);
  }

  .home-links{
    margin-top:10px;
    font-size:1.08rem;
  }
  .home-links a{
    text-decoration:none;
    margin-right:12px;
    padding:6px 10px;
    border-radius:10px;
    background: rgba(255,255,255,0.06);
    display:inline-block;
  }
  .home-links a:hover{
    background: rgba(255,255,255,0.12);
  }

  /* mobile */
  @media (max-width: 950px){
    .hero-banner img{ height:210px; }
    .home-wrap{
      flex-direction:column;
      align-items:flex-start;
      gap:24px;
    }
    .home-right img{
      width:260px;
    }
    .home-left h1{
      font-size:2.4rem;
    }
    .home-left p{
      font-size:1.08rem;
    }
  }
</style>

<div class="hero-banner">
  <img src="{{ '/assets/home/banner_DNA_Mountains.png' | relative_url }}" alt="DNA Mountains Banner">
</div>

<div class="home-wrap">

  <!-- LEFT SIDE: PHOTO -->
  <div class="home-right">
    <img src="{{ '/assets/home/Ryan_photo.jpg' | relative_url }}" alt="Ryan North">
  </div>

  <!-- RIGHT SIDE: TEXT -->
  <div class="home-left">
    <h1>Ryan North</h1>

    <p>
      Howdy, welcome to my website- home to my research, interests, projects, and interesting stuff! Please feel free to contact me via my email below.
      
    </p>

    <p><strong>Email:</strong> ryanjamesnorth@gmail.com</p>

    <p class="home-links">
      <a href="#" target="_blank" rel="noopener">Google Scholar</a>
      <a href="#" target="_blank" rel="noopener">ORCID</a>
      <a href="#" target="_blank" rel="noopener">GitHub</a>
    </p>
  </div>

</div>

</div>
