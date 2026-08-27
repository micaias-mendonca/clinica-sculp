document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll);
  onScroll();

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("is-open");
      toggle.classList.toggle("is-open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        toggle.classList.remove("is-open");
      });
    });
  }

  document.querySelectorAll(".toggle-more").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.getAttribute("data-target");
      var target = document.getElementById(targetId);
      if (!target) return;
      var open = target.classList.toggle("is-open");
      btn.classList.toggle("is-open", open);
      btn.querySelector(".label").textContent = open
        ? "Ver menos tratamentos"
        : btn.getAttribute("data-label");
    });
  });

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value.trim();
      var phone = form.querySelector("#phone").value.trim();
      var treatment = form.querySelector("#treatment").value;
      var message = form.querySelector("#message").value.trim();
      var text = "Olá, Sculp! Meu nome é " + name +
        ". Tenho interesse em: " + treatment +
        (message ? ". Mensagem: " + message : "") +
        ". Meu telefone: " + phone;
      var waNumber = "5522999473212"; /* TODO: substituir pelo número real com DDI+DDD */
      window.open("https://wa.me/" + waNumber + "?text=" + encodeURIComponent(text), "_blank");
    });
  }
});
