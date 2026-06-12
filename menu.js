// Minimal interaction script for the static per-language pages.
// Handles only the slide-in menu (open/close). No i18n — content is static per page.
(function () {
  function getMenu() { return document.getElementById('site-menu'); }

  function openMenu() {
    const menu = getMenu();
    if (!menu) return;
    menu.hidden = false;
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    const toggle = document.querySelector('.menu-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    const menu = getMenu();
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    const toggle = document.querySelector('.menu-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (target) {
      const action = target.getAttribute('data-action');
      if (action === 'menu-open') { e.preventDefault(); openMenu(); return; }
      if (action === 'menu-close') { e.preventDefault(); closeMenu(); return; }
    }
    // Close the menu when a navigation link inside it is clicked —
    // no preventDefault, so the link still scrolls/navigates to its target.
    if (e.target.closest('.site-menu__link')) { closeMenu(); }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();
