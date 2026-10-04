# Himon Patel Portfolio V23

V23 keeps the V22 application-focused structure and adds **Make 10**, the CS50P final project, as smaller technical evidence rather than promoting it above the main case studies.

## Main portfolio hierarchy

### Selected case studies
- SmartCampus — system / build
- Project Atlas — product / system
- Understanding Grab — research / product

### Other technical work
- Make 10 — CS50P final project (Python, CLI, validation, brute-force hint search, pytest)
- RFID + Biometric Student ID — ESP32 / RFID / fingerprint prototype

### Initiatives & explorations
- Gamified Learning / Game Jam
- The Parallel Dimension

## V23 changes

- Added a dedicated **Other Technical Work** section on the homepage.
- Added a lightweight `make10.html` project page based on the submitted project README.
- Added the existing Make 10 video demo: `https://youtu.be/vppqqNDNDrQ`.
- Moved RFID from the primary case-study selector into Other Technical Work while preserving the full RFID page.
- Updated the CS50P credential on the About page to point to Make 10.
- Added a `make10Github` configuration field.
- Fixed the contact-card label so a configured GitHub link displays as GitHub rather than LinkedIn.

## Required configuration before publishing

Open `script.js` and fill in the URLs you want to expose:

```js
const CONFIG={
  linkedin:"https://linkedin.com/in/himon-patel-49b174358",
  github:"YOUR_GITHUB_PROFILE_URL",
  email:"himon.atlas@gmail.com",
  smartcampusGithub:"YOUR_SMARTCAMPUS_REPOSITORY_URL",
  make10Github:"YOUR_MAKE10_REPOSITORY_URL"
};
```

Buttons tied to an empty config value remain hidden.

## Make 10 repository note

The public Make 10 repository should keep a note near the top of its README explaining that it is a public portfolio copy of the final project originally submitted through CS50's course submission system.

## SmartCampus screenshots

The portfolio still does not invent SmartCampus screenshots. Add real screenshots later if useful, preferably a small set that shows the important roles and cross-role workflow.

## Open locally

Open `index.html` in a browser, or use VS Code + Live Server.

## Publication principle

The site intentionally separates what was built, what was tested, what remains unvalidated, and what is only an emerging interest.
