---
layout: art
title: Artwork
artworks:
  - title: Lamp
    image: /img/lamp.jpeg
    description: A personal artwork study centered on light and shadow.
  - title: Car
    image: /img/car.jpg
    description: A personal artwork piece studying structure, contrast, and perspective.
  - title: Mann
    image: /img/mann.jpg
    description: A personal artwork portrait study with attention to shape and tone.
  - title: Still
    image: /img/still.jpg
    description: A personal artwork still life study with a focus on balance and light.
  - title: Bottle
    image: /img/bottle.jpg
    description: A personal artwork study focused on form, reflection, and texture.
  - title: Green
    image: /img/green.jpg
    description: A personal artwork study focused on color and composition.
  - title: Eagle
    image: /img/eagle.jpg
    description: A personal artwork piece studying movement, texture, and contrast.
  - title: Pumpkin
    image: /img/pumpkin.jpg
    description: A personal artwork study exploring color, shape, and natural texture.
  - title: Eye
    image: /img/eye.jpg
    description: A personal artwork study of detail, shading, and expression.
  - title: Barn
    image: /img/barn.jpg
    description: A personal artwork landscape study centered on structure and atmosphere.
  - title: Self
    image: /img/self.jpg
    description: A self-portrait study from my personal artwork practice.
  - title: Mandala
    image: /img/Mandala.jpg
    description: A detailed personal artwork piece built around symmetry and pattern.
  - title: Monticello
    image: /img/monticello.jpg
    description: A personal artwork architectural study exploring proportion and depth.
---

<div class="gallery-grid">
  {% for artwork in page.artworks %}
    <button
      class="gallery-item"
      type="button"
      data-title="{{ artwork.title | escape }}"
      data-medium="{{ artwork.medium | escape }}"
      data-image="{{ artwork.image | escape }}"
      aria-label="View {{ artwork.title }}"
    >
      <span class="gallery-frame">
        <img src="{{ artwork.image }}" alt="{{ artwork.title }}" loading="lazy" />
      </span>
      <span class="gallery-caption">
        <span class="gallery-caption-title">{{ artwork.title }}</span>
        {% if artwork.medium %}
        <span class="gallery-caption-medium">{{ artwork.medium }}</span>
        {% endif %}
      </span>
    </button>
  {% endfor %}
</div>
