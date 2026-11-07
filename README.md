# Lauraville Cares

Crowdfunding for one Lauraville project at a time, by The Lauraville Fair Inc. (501(c)(3)). Hosted on GitHub Pages. Donations go through [Zeffy](https://www.zeffy.com), which charges nonprofits no fees.

Plain HTML/CSS, no build step. Everything is in `index.html`.

## The total

The progress bar is Zeffy's embedded thermometer, so it updates itself after every donation. Nothing to edit.

## Name-on-the-stage spots (Save the Stage! only)

In `index.html`, under **NAME ON THE STAGE**, change the bold number in each "of N left" line as spots are claimed. Delete that whole section when the project ends.

## Starting a new project

1. Under **PAST PROJECTS**, copy the card template, fill it in for the finished project, and delete the "first project" note.
2. Under **CURRENT PROJECT**, replace the title, photo, intro, story, and budget. Swap the old Zeffy form name (e.g. `save-the-stage-2`) for the new one in the thermometer and in both links on the "Give" button.
3. Put photos in `assets/images/projects/`. Keep them under ~300 KB (WebP or JPG around 1200px wide).

Anything highlighted in yellow (`class="todo"`) still needs real content.

After editing `styles.css`, bump the `?v=` number where it's linked in `index.html`.

## Printed cards

`print/postcard.html` is a 4x6 card for the current project (photo, headline, blurb, goal, and QR code). For a new project, edit the text and photo in that file, then ask Claude to make new PDFs. The QR code (`print/qr.png`) is a static code from qr-code-generator.com that opens https://lauravillecares.org/ directly, so it never expires and works for every future project.
