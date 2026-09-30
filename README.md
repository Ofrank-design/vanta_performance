# Vanta Performance

A private performance coaching website built with plain HTML, CSS and
vanilla JavaScript. There is no build step and no framework. Open
`index.html` in a browser, or serve the folder with any static server.

## Structure

- 12 pages: Home, Method, Assessment, Programs, Program Detail (4 programs),
  Membership, Apply, Journal, Journal Article (6 articles), About, Contact, 404
- `js/data.js` holds all programs, membership tiers, testimonials, team bios,
  journal articles (full text) and FAQs. Copy changes never require editing HTML
- `js/imageRegistry.js` holds every photograph, referenced by key such as
  `hero.primary` or `team.julianVoss`. Pages never hardcode image paths
- `images/` holds the optimized WebP files, organized by category
- The assessment (`assessment.html`) and application (`apply.html`) flows run
  fully in the browser

## Images

All 33 image slots are filled. Files are resized to a 1920px maximum and
converted to WebP. To swap a photo, replace the file listed in the registry or
change its `src`. Each entry also carries `alt` text and an `object-position`
value that keeps the subject in frame when a landscape image is cropped to a
portrait or square container.

Some source files are low resolution and are best replaced when higher quality
versions are available: `journal/conditioning` (612px wide), `programs/power`
(494px), `programs/strength` (672px), and `journal/speed`, `journal/endurance`
and `programs/mobility` (800px). Three of the supplied stock images still show
stock site watermarks (`journal/speed`, `journal/endurance`, `programs/mobility`)
and need licensed versions before launch.

## Before launch

- The contact form, application form, assessment and newsletter form run
  client side only. Connect them to a backend or form service to receive
  submissions
- The Privacy and Terms footer links are placeholders
- Fonts load from Google Fonts. Self host them if you need to avoid the
  external request
