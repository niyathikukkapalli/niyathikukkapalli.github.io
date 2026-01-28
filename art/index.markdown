---
layout: art
---

<!--
<div class="boxes">
<p class="box1">
<a href="/art/Elementary">Elementary Art</a>
<img class = "cool" src="/img/art2.jpg">
</p>
-->

<!--

<p class="box2">
<a href="/art/HIghSchool">HighSchool Art</a>
<img class = "cool" src="/img/art3.jpg"/>
</p>

<!--
</div>
-->

<center><h2>Things I've Drawn <span class="emoji">🎨</span> </h2></center>

{% assign artworks = "/img/lamp.jpeg|/img/pumpkin.jpg|/img/Mandala.jpg|/img/eagle.jpg|/img/barn.jpg|/img/bottle.jpg|/img/car.jpg|/img/mann.jpg|/img/self.jpg|/img/green.jpg|/img/eye.jpg|/img/still.jpg|/img/monticello.jpg" | split: "|" %}

<div class="art-gallery">
  {% for img in artworks %}
    {% assign filename = img | split: "/" | last %}
    {% assign base = filename | split: "." | first %}
    {% assign pretty = base | replace: "-", " " | replace: "_", " " %}
    <div class="art-card">
      <img src="{{ img }}" alt="{{ pretty }}" loading="lazy">
      <div class="art-card-body">
        <div class="art-card-title">{{ pretty }}</div>
        <div class="art-card-meta">Personal artwork</div>
      </div>
    </div>
  {% endfor %}
</div>
