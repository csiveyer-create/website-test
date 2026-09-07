# Winches & Wirecams — One Page Cinematic Website

This build recreates the approved cinematic homepage concept as a real single-page website.

## GitHub Pages
Upload the CONTENTS of this folder to the root of your GitHub repository:

- index.html
- styles.css
- script.js
- assets/

Then set GitHub Pages to:

Settings → Pages → Deploy from a branch → `main` → `/ (root)`

## Original homepage video
The hero is already wired to use the original homepage video if you add it as:

`assets/home-hero.mp4`

Until that file is present, the website uses the cinematic approved hero artwork as the fallback image.

## Showreels
The existing Wix site does not expose the underlying master Stunt / Wirecam reel video file through the public page markup. The website therefore has a complete fullscreen showreel interface, selected production chapters, and links to the original live reel pages. When the master MP4 files are available they can be placed directly into the modal player.


## V5 — exact approved homepage
The desktop opening screen now uses the exact approved reference image as the visible first-screen composition.

Transparent interactive controls are positioned over:
- Home / Stunts / Wirecams / Navigator / Services / BTS / About / Contact
- Start a Project
- Watch Showreel
- Discuss a Sequence
- Stunts / Wirecams / Navigator lower cards

After the first screen scrolls away, the live sticky website navigation appears.

This approach is deliberate: it guarantees that the opening screen matches the approved concept rather than merely approximating it in HTML/CSS.
