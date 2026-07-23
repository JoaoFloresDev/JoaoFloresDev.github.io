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

  // --- Category filter ---
  var chips = document.querySelectorAll(".chip");
  var cards = document.querySelectorAll(".app-card");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      var f = chip.getAttribute("data-filter");
      cards.forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-group") === f;
        card.style.display = show ? "" : "none";
      });
    });
  });

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
