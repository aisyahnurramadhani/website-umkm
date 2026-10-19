
document.querySelectorAll(".nav").forEach(function (nav) {
  const toggle = nav.querySelector(".nav-toggle");
  const menu = nav.querySelector("#nav-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
  });
  // Tutup menu setelah tautan dipilih
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Buka menu navigasi");
    });
  });
  // Tutup menu dengan tombol Escape
  nav.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Buka menu navigasi");
      toggle.focus();
    }
  });
});

