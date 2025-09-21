// main.js - hamburger menu toggle + back-to-top smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  // Hamburger menu
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-list');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close nav on link click (mobile)
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }

  // Back to top links: smooth scroll
  document.body.addEventListener('click', function (e) {
    const el = e.target;
    if (el.tagName === 'A' && el.getAttribute('href') === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});
