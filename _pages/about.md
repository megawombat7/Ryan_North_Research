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
I’m originally from Wisconsin, where I did my undergrad at the University of Wisconsin–Madison, majoring in Evolutionary Biology, Zoology, and Anthropology, with a minor in Archaeology. I’ve always liked understanding how systems work — whether that’s ecosystems, bones, or old human tools buried in the ground.
</p>

<p>
I grew up hunting and fishing, and most of my favorite memories involve cold mornings, rivers, and woods that smell like pine and wet leaves. That love of being outside has stuck with me. It’s part of how I think — a lot of my best ideas have come while hiking, fishing, or just wandering around somewhere quiet.
</p>

<p>
I moved to Montana to complete my master’s degree at Montana State University, and quickly realized it felt like home. I spend as much time as possible in the mountains and on rivers, and I’m deeply grateful that my work and my life have intersected in a place that values both wild landscapes and scientific curiosity.
</p>

<p>
Soon, I’ll be heading to Idaho to begin medical school — excited to carry forward both the scientific side of my life and the human one.
</p>
  </p>

  <div class="about-grid">
    <img src="{{ '/assets/about/me_mountain.jpg' | relative_url }}" alt="Ryan in the mountains">
    <img src="{{ '/assets/about/montana.jpg' | relative_url }}" alt="Montana landscape">
    <img src="{{ '/assets/about/montana_2.jpg' | relative_url }}" alt="Montana landscape 2">
  </div>

  <h2>Research</h2>

<p>
My research path has been anything but linear — and I’m glad for that.
</p>

<p>
I started in high school working with the Wisconsin DNR doing population surveys and live captures of porcupines at the Sandhill Wildlife Refuge. That experience grounded me in field biology — early mornings, careful measurements, real animals, real data.
</p>

<p>
In college, I continued that thread as an undergraduate researcher in the Brunet Lab in partnership with USDA-ARS, studying how pollinators influence gene flow in crop species like alfalfa. It was my first exposure to asking mechanistic questions at scale — and to seeing how evolutionary principles play out in agriculture and ecology.
</p>

<p>
Eventually, I found my way into biomedical research at the Wisconsin Institute for Medical Research in the Cellular and Molecular Arrhythmia Research Program. I spent three years working with Ruben Alexanian, M.D., and Matt Wolff, M.D., on two major projects — one focused on differentiating iPSCs into valve interstitial cells using porcine valve-derived media, and the other modeling LMNA-associated dilated cardiomyopathy using a patient-derived stem cell line alongside novel peptide development.
</p>

<p>
That period shaped me deeply. I learned a full suite of molecular and cellular techniques, presented posters and talks, wrote grants, and began thinking seriously about translational science.
</p>

<p>
I later completed a master’s degree focused on RNA sequencing in a developmental toxicology context. In the Merzdorf Lab at Montana State, I studied how pharmaceutical exposures — including fentanyl, oxycodone, and citalopram — alter the transcriptome during early development in zebrafish embryos, collaborating closely with Dr. Brian Bothner, Ph.D., and Dr. Mensur Dlakic, Ph.D.
</p>

<p>
Across all of it — field ecology, stem cell biology, developmental transcriptomics — the common thread has been curiosity about mechanisms. I’m drawn to problems where the “obvious” model system isn’t the whole story, and where careful comparative thinking opens something new.
</p>
  </p>

  <h2>Professional development</h2>
  <p>
Coming Soon
  </p>

</div>

</div>
