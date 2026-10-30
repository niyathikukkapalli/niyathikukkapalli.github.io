(function () {
  var modal = document.getElementById("art-lightbox");
  var dialog = document.getElementById("art-lightbox-dialog");
  var image = document.getElementById("art-lightbox-image");
  var titleEl = document.getElementById("art-lightbox-title");
  var mediumEl = document.getElementById("art-lightbox-medium");
  var page = document.querySelector(".page");
  var items = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
  var index = 0;
  var trigger = null;

  if (!modal || !dialog || !image || !items.length) return;

  function setContent(i) {
    var button = items[i];
    if (!button) return;
    index = i;
    var title = button.getAttribute("data-title") || "";
    var medium = button.getAttribute("data-medium") || "";
    titleEl.textContent = title;
    mediumEl.textContent = medium;
    mediumEl.hidden = !medium;
    image.src = button.getAttribute("data-image") || "";
    image.alt = title;
  }

  function focusable() {
    return Array.prototype.slice.call(
      dialog.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")
    ).filter(function (el) {
      return !el.disabled && !el.hidden;
    });
  }

  function open(i, opener) {
    trigger = opener || items[i];
    setContent(i);
    modal.hidden = false;
    document.body.classList.add("lightbox-open");
    if (page) page.setAttribute("inert", "");
    var closeBtn = dialog.querySelector("[data-close-lightbox]");
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("lightbox-open");
    if (page) page.removeAttribute("inert");
    image.removeAttribute("src");
    if (trigger && typeof trigger.focus === "function") trigger.focus();
  }

  items.forEach(function (button, i) {
    button.addEventListener("click", function () {
      open(i, button);
    });
  });

  modal.addEventListener("click", function (event) {
    if (event.target.closest("[data-close-lightbox]")) {
      close();
      return;
    }
    if (event.target.closest("#art-lightbox-image")) return;
    close();
  });

  document.addEventListener("keydown", function (event) {
    if (modal.hidden) return;

    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setContent((index + 1) % items.length);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setContent((index - 1 + items.length) % items.length);
      return;
    }

    if (event.key !== "Tab") return;

    var nodes = focusable();
    if (!nodes.length) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    var first = nodes[0];
    var last = nodes[nodes.length - 1];
    var active = document.activeElement;

    if (event.shiftKey && (active === first || !dialog.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  });
})();
