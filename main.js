(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-theme-set]");

  function apply(theme) {
    var t = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", t);
    buttons.forEach(function (btn) {
      var on = btn.getAttribute("data-theme-set") === t;
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    try {
      localStorage.setItem("aurora-ui-theme", t);
    } catch (e) {}
  }

  var stored = null;
  try {
    stored = localStorage.getItem("aurora-ui-theme");
  } catch (e) {}

  if (stored === "light" || stored === "dark") {
    apply(stored);
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-theme-set"));
    });
  });
})();
