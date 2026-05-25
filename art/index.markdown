---
layout: art
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

<div class="gallery-hero">
  <h1 class="gallery-title">
    Things I've Drawn <span class="gallery-title-emoji" aria-hidden="true">🎨</span>
  </h1>
  <p class="gallery-subtitle">Paintings, drawings, and everything in between.</p>
  <hr class="gallery-divider" />
</div>

<div class="gallery-grid">
  {% for artwork in page.artworks %}
    <button
      class="gallery-item"
      type="button"
      data-title="{{ artwork.title | escape }}"
      data-category="{{ artwork.category | default: 'Personal artwork' | escape }}"
      data-description="{{ artwork.description | escape }}"
      data-image="{{ artwork.image | escape }}"
      aria-label="Open {{ artwork.title }}"
    >
      <img src="{{ artwork.image }}" alt="{{ artwork.title }}" loading="lazy" />
      <span class="zoom-hint" aria-hidden="true">&#128269;</span>
      <span class="gallery-item-overlay" aria-hidden="true">
        <span class="gallery-item-title">{{ artwork.title }}</span>
        <span class="gallery-item-category">{{ artwork.category | default: "Personal artwork" }}</span>
      </span>
    </button>
  {% endfor %}
</div>

<footer class="gallery-footer">
  <p>&copy; 2026 Niyathi Kukkapalli. All rights reserved.</p>
</footer>

<div class="art-lightbox" id="art-lightbox" hidden>
  <div class="art-lightbox-dialog" role="dialog" aria-modal="true" aria-labelledby="art-lightbox-title">
    <div class="art-lightbox-image-wrap">
      <img id="art-lightbox-image" src="" alt="" />
      <button class="art-lightbox-close" type="button" data-close-lightbox aria-label="Close artwork viewer">
        &#x2715;
      </button>
    </div>
    <div class="art-lightbox-info">
      <h2 class="art-lightbox-title" id="art-lightbox-title"></h2>
      <p class="art-lightbox-category" id="art-lightbox-category"></p>
      <p class="art-lightbox-description" id="art-lightbox-description"></p>
    </div>
  </div>
</div>

<script>
  (function () {
    var modal = document.getElementById("art-lightbox");
    var modalImage = document.getElementById("art-lightbox-image");
    var modalTitle = document.getElementById("art-lightbox-title");
    var modalCategory = document.getElementById("art-lightbox-category");
    var modalDescription = document.getElementById("art-lightbox-description");
    var modalDialog = modal ? modal.querySelector(".art-lightbox-dialog") : null;

    function closeLightbox() {
      if (!modal) return;
      modal.hidden = true;
      document.body.classList.remove("lightbox-open");
    }

    function openLightbox(button) {
      if (!modal || !button) return;
      modalTitle.textContent = button.dataset.title || "";
      modalCategory.textContent = button.dataset.category || "";
      modalDescription.textContent = button.dataset.description || "";
      modalImage.src = button.dataset.image || "";
      modalImage.alt = button.dataset.title || "";
      modal.hidden = false;
      document.body.classList.add("lightbox-open");
      if (modalDialog) modalDialog.focus();
    }

    document.querySelectorAll(".gallery-item").forEach(function (button) {
      button.addEventListener("click", function () {
        openLightbox(button);
      });
    });

    if (modal) {
      modal.addEventListener("click", function (event) {
        if (event.target === modal || event.target.closest("[data-close-lightbox]")) {
          closeLightbox();
        }
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal && !modal.hidden) {
        closeLightbox();
      }
    });
  })();
</script>
