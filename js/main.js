// Rozbalovací menu na mobilu
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // po výběru položky menu zavřít
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  // při přechodu na desktop menu vždy resetovat
  window.matchMedia('(min-width: 62rem)').addEventListener('change', function () {
    setOpen(false);
  });
})();
