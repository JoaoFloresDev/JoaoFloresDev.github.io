/* Gambit Studio — interactions */
(function () {
  "use strict";

  // --- Sticky nav shadow ---
  var nav = document.querySelector("header.nav");
  var onScroll = function () {
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- Mobile menu ---
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // --- App catalog: category filter + live search ---
  var chips = document.querySelectorAll(".chip");
  var cards = document.querySelectorAll(".app-card");
  var search = document.getElementById("app-search-input");
  var empty = document.getElementById("apps-empty");
  var reset = document.getElementById("apps-reset");

  // Per-app ambient glow: blurred clone of each icon behind the card
  cards.forEach(function (card) {
    var icon = card.querySelector(".app-icon");
    if (!icon) return;
    var glow = icon.cloneNode(false);
    glow.className = "card-glow";
    glow.removeAttribute("loading");
    glow.setAttribute("aria-hidden", "true");
    glow.alt = "";
    card.insertBefore(glow, card.firstChild);
  });

  // Category counts on chips
  chips.forEach(function (chip) {
    var f = chip.getAttribute("data-filter");
    var n = 0;
    cards.forEach(function (card) {
      if (f === "all" || card.getAttribute("data-group") === f) n++;
    });
    var count = document.createElement("span");
    count.className = "count";
    count.textContent = n;
    chip.appendChild(count);
  });

  function cardText(card) {
    var t = card.querySelector(".app-title");
    var d = card.querySelector(".app-desc");
    return ((t ? t.textContent : "") + " " + (d ? d.textContent : "")).toLowerCase();
  }

  function applyFilters() {
    var active = document.querySelector(".chip.active");
    var f = active ? active.getAttribute("data-filter") : "all";
    var q = search ? search.value.trim().toLowerCase() : "";
    var visible = 0;
    cards.forEach(function (card) {
      var show = (f === "all" || card.getAttribute("data-group") === f) &&
                 (!q || cardText(card).indexOf(q) !== -1);
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });
    if (empty) empty.hidden = visible > 0;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      applyFilters();
    });
  });
  if (search) search.addEventListener("input", applyFilters);
  if (reset) {
    reset.addEventListener("click", function () {
      if (search) search.value = "";
      chips.forEach(function (c) { c.classList.remove("active"); });
      var all = document.querySelector('.chip[data-filter="all"]');
      if (all) all.classList.add("active");
      applyFilters();
    });
  }

  // --- Reveal on scroll ---
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // --- Footer year ---
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
