# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]
### Added
- Placeholder for upcoming features/pages.
### Changed
- Placeholder for code or config refactors.
### Fixed
- Placeholder for bug/security fixes.
### Removed
- Placeholder for removed/unused code or assets.
---

## [1.3.1] - 2025-09-12
### Fixed
- Header now uses a fixed position, ensuring it stays visible while scrolling across all pages.
- Added consistent **container padding** so there is spacing on left and right across all devices.
- Adjusted **"View All" links** to be aligned with section headings (top-right corner).
- Resolved minor layout alignment issues on mobile.

### Changed
- Cleaned up **HTML/CSS spacing and indentation** for better readability.
- Improved **inline comments** in HTML and CSS for maintainability.

## [1.3.0] - 2025-09-12
### Added
- `courses-page2.html`, `services-page2.html`, `posts-page2.html` for pagination support on section pages.
- `contact.html` page with layout consistent with global header/footer structure.
- New posts (`/posts/post-003.html`), services (`/services/service-003.html`), and courses (`/courses/course-003.html`) for demo content.

### Changed
- Homepage sections renamed:
  - **Recent Posts → My Posts**  
  - Now three sections: **My Courses**, **My Services**, **My Posts**.
- Homepage section cards:
  - Shows 3 cards on desktop, 2 cards on mobile (1-column grid).
  - Each section header now has a **"View All"** link aligned top-right.
- `header.html` and `footer.html` are now reused via **fetch** in `/components/` for DRY structure.
- Responsive styling separated into `/css/responsive.css`.
- All cards updated with **images** inside them.
- Fixed mobile hamburger menu flicker issue when toggling nav.

---

## [1.2.0] - 2025-09-11
### Added
- Dedicated **Courses** and **Services** pages with custom card layouts.
- Homepage sections for **My Courses** and **My Services** showing demo cards.
- Pagination support for:
  - `/posts.html` (All Posts)
  - `/courses.html` (All Courses)
  - `/services.html` (All Services)

### Changed
- Homepage sections display 6 cards initially with “View All” links.
- `style.css` updated for consistent grid card hover effects across sections.

---

## [1.1.0] - 2025-09-10
### Added
- Sticky header with semi-transparent background on scroll.
- Footer with copyright notice.
- Dummy posts in `/posts/` with navigation for previous/next post and back-to-top button.

### Changed
- Post cards on homepage converted into a **3-grid card layout** with excerpts and “Read More” links.
- Posts listing (`/posts.html`) updated to **1-column excerpts** with pagination placeholder.

---

## [1.0.0] - 2025-09-09
### Initial Commit
- Static site built with **pure HTML, CSS, JavaScript** (no frameworks).
- Off-white site theme with spacing on left/right margins.
- Header with site name + navbar (Home, Posts, About).
- Homepage with **Recent Posts** section (3-grid cards).
- `/posts/` folder with individual post pages.
