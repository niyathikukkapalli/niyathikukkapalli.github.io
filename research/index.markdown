---
layout: research
---

<div class="projects-hero">
  <h1 class="projects-title">
    Things I've Worked On <span class="projects-title-emoji" aria-hidden="true">🍜</span>
  </h1>
  <p class="projects-subtitle">Research, papers, and projects across math, CS, and science.</p>
  <hr class="projects-divider" />
</div>

<div class="projects-content">

  <p class="projects-section-label">Computer Science</p>

  {% include project-entry.html
    date="May 2026"
    tag="Natural Language Processing"
    title="Editing Memory in Transformers at Scale"
    href="/research/cos484.pdf"
    abstract="This paper reproduces and stress-tests MEMIT, a method for editing factual knowledge into LLM weights, finding it works perfectly on GPT-J but transfers poorly to Llama 3.1 8B. Even when edits succeed, clever adversarial prompts can trick the model into recalling its original, pre-edit knowledge over 65% of the time."
  %}

  {% include project-entry.html
    date="July 2025"
    tag="Algorithms"
    title="Greedy Range Trees for Product Metrics"
    abstract="Developed a novel data structure for efficiently analyzing product metrics by extending classical range tree techniques. Designed and implemented greedy range trees in Python to optimize multi-dimensional queries, improving speed and scalability for large datasets. This enables faster, more accurate analysis of product metrics, including trends, anomalies, and usage patterns."
    highlight1_label="Presented"
    highlight1_text="32nd Fall Workshop in Computational Geometry, Queen's College (FWCG 2025)"
    highlight1_variant="presented"
    highlight2_label="Accepted"
    highlight2_text="38th Canadian Conference on Computational Geometry, Lakehead University (CCCG 2026)"
    highlight2_variant="accepted"
    arxiv="https://arxiv.org/abs/2603.22500v1"
    linktree="https://linktr.ee/productmetricgreedyrangetrees"
  %}

    

  <p class="projects-section-label">Mathematics</p>

   {% include project-entry.html
    date="November 2023"
    tag="Graph Theory"
    title="Problems and Solutions in Advanced Graph Theory"
    href="/research/UD.pdf"
    abstract="A compilation of selected problems and solutions from research in advanced graph theory, covering topics such as graph colorings, connectivity, planarity, and extremal problems."
  %}

  {% include project-entry.html
    date="August 2023"
    tag="Number Theory"
    title="The Artin Hasse Exponential"
    href="/research/Artin_Hasse.pdf"
    abstract="In 1928, Emil Artin and Helmut Hasse introduced the Artin–Hasse exponential, a p-adic analogue. After introducing the basics of p-adic analysis, including why \(\mathbb{Q}_p\) is the completion of \(\mathbb{Q}\), this paper shows that the exponential and logarithm remain inverses, with intuition drawn from metric spaces and topology. The core is an inductive-based proof of Dwork's Lemma, used to prove the integrality of the Artin–Hasse Exponential."
  %}

 

  <p class="projects-section-label">Physics &amp; Science</p>

  {% include project-entry.html
    date="August 2023"
    tag="Classical Mechanics"
    title="Temporal Analysis of Synchronization based on Varying String Lengths"
    href="/research/temporal_an.pdf"
    abstract="Building on Christiaan Huygens' discovery of coupled pendulum synchronization, this paper examines how string length affects synchronization time on a moving platform. Experiments showed that shorter strings generally synchronize faster. Behaviors like brief pauses and in-phase vs. anti-phase motion are explained using classical mechanics. The paper also models motion and energy using Lagrangian techniques."
    highlight1_label="2nd Place"
    highlight1_text="Physics at Delaware Valley Science Fair (2023)"
    highlight1_variant="award"
  %}

</div>

<footer class="projects-footer">
  <p>&copy; 2026 Niyathi Kukkapalli. All rights reserved.</p>
</footer>
