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

  // --- Back-to-top button (injected site-wide, self-contained styles) ---
  (function initBackToTop() {
    const style = document.createElement('style');
    style.textContent =
      '.to-top{position:fixed;right:24px;bottom:24px;width:46px;height:46px;border:0;border-radius:50%;' +
      'background:#FF9238;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;' +
      'box-shadow:0 6px 18px rgba(0,0,0,.18);opacity:0;visibility:hidden;transform:translateY(10px);' +
      'transition:opacity .25s ease,transform .25s ease,background .2s ease,visibility .25s ease;z-index:1000;}' +
      '.to-top.is-visible{opacity:1;visibility:visible;transform:translateY(0);}' +
      '.to-top:hover{background:#F78127;}' +
      'body.menu-open .to-top{opacity:0!important;visibility:hidden!important;}' +
      '@media(max-width:768px){.to-top{right:16px;bottom:16px;width:42px;height:42px;}}';
    document.head.appendChild(style);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function onScroll() {
      if (window.pageYOffset > 400) btn.classList.add('is-visible');
      else btn.classList.remove('is-visible');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();
})();
