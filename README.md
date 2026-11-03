# Lauraville Cares

Crowdfunding for one Lauraville project at a time, by The Lauraville Fair Inc. (501(c)(3)). Hosted on GitHub Pages. Donations go through [Zeffy](https://www.zeffy.com), which charges nonprofits no fees.

Plain HTML/CSS, no build step. Everything is in `index.html`.

## The total

The progress bar is Zeffy's embedded thermometer, so it updates itself after every donation. Nothing to edit.

## Starting a new project

1. Under **PAST PROJECTS**, copy the card template, fill it in for the finished project, and delete the "first project" note.
2. Under **CURRENT PROJECT**, replace the title, photo, intro, story, and budget. Swap the old Zeffy form name (e.g. `save-the-stage-2`) for the new one in both the thermometer and the "Give" button.
3. Put photos in `assets/images/projects/`. Keep them under ~300 KB (WebP or JPG around 1200px wide).

Anything highlighted in yellow (`class="todo"`) still needs real content.

After editing `styles.css`, bump the `?v=` number where it's linked in `index.html`.
