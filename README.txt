Static site (final) - structure and notes

Components:
- /components/header.html  (header partial, injected via fetch)
- /components/footer.html  (footer partial, injected via fetch)
- /css/style.css           (core styles; comments included)
- /css/responsive.css      (responsive rules)
- /js/main.js              (loads header/footer, mobile nav, back-to-top smooth scroll)
- /images/*.svg            (placeholder images used in cards)
- Listing pages: posts.html, posts-page2.html, courses.html, courses-page2.html, services.html, services-page2.html
- Content folders: /posts, /courses, /services  (single pages like post-001.html etc.)

Notes:
- This is a static demo. The contact form is non-functional (no backend).
- To preview locally: unzip and run a static server (recommended) e.g. 'python -m http.server' from the unzipped folder, then open http://localhost:8000
