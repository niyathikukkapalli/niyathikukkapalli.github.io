(function () {
  var tabs = document.querySelectorAll('nav [role="tab"]');

  function show(id) {
    tabs.forEach(function (tab) {
      var on = tab.getAttribute("data-tab") === id;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      var panel = document.getElementById(tab.getAttribute("data-tab"));
      if (panel) panel.hidden = !on;
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var id = tab.getAttribute("data-tab");
      show(id);
      history.replaceState(null, "", "#" + id);
    });
  });

  var start = location.hash.replace(/^#/, "");
  if (start === "research") start = "projects";
  if (start && document.getElementById(start)) show(start);
})();
