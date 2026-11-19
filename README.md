# Lauraville Cares

Crowdfunding for Lauraville neighborhood projects, by The Lauraville Fair Inc. (501(c)(3)). Hosted on GitHub Pages at lauravillecares.org. Donations go through [Zeffy](https://www.zeffy.com), which charges nonprofits no fees. Plain HTML/CSS, no build step.

## Pages

| Path | What it is |
|---|---|
| `/` (`index.html`) | Forwards to `/stage/`. The printed Save the Stage! cards' QR code points here. |
| `/main/` | Home page: active campaigns, how it works, past projects. Temporary address until the stage cards are retired. |
| `/stage/` | Save the Stage! campaign |
| `/3d-printing/` | Fuel the GHEMS Makers campaign |
| `/print/` | Printable 4x6 card template |

Shared styles are in `assets/css/styles.css`; photos in `assets/images/projects/` (keep them under ~300 KB, about 1200px wide). After editing `styles.css`, bump the `?v=` number where pages link it.

Every page has `<meta name="robots" content="noindex">` until the board approves going public; remove it then.

## Moving the home page to the root (when stage cards are retired)

Replace `index.html` with `main/index.html`, change its canonical/og:url and logo link to `/`, change the logo and "All projects" links on campaign pages from `/main/` to `/`, and make `main/index.html` forward to `/`.

## Running a campaign

- **Totals:** each campaign page shows Zeffy's thermometer, which updates itself. Offline gifts (checks, cash) are recorded in Zeffy as offline payments on the right form.
- **Stepped goals (GHEMS):** when a goal is hit, raise the goal in Zeffy and add `class="goal--funded"` to that goal's `<li>`.
- **Name-on-the-stage spots:** in `stage/index.html`, update the bold number in each "of N left" line as spots are claimed.

## Adding a new campaign

1. Create a Zeffy donation form.
2. Copy a campaign folder (e.g. `3d-printing/`) to a new folder, and replace the title, description, link-preview tags, photo, story, goals, and the Zeffy form name in the thermometer and both links on the "Give" button.
3. Add a card for it under **ACTIVE PROJECTS** in `main/index.html`.

## Ending a campaign

Remove its card from **ACTIVE PROJECTS** in `main/index.html` and add a card under **PAST PROJECTS** (template is in a comment there).

## Printed cards

`print/postcard.html` is a 4x6 card for Save the Stage! (photo, headline, blurb, goal, and QR code). For a new card, edit the text and photo, then ask Claude to make new PDFs. The QR code (`print/qr.png`) is a static code from qr-code-generator.com that opens https://lauravillecares.org/ directly.
