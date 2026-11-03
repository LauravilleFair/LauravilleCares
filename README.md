# Lauraville Cares

Crowdfunding for one Lauraville project at a time, by The Lauraville Fair Inc. (501(c)(3)). Hosted on GitHub Pages. Donations go through [Zeffy](https://www.zeffy.com), which charges nonprofits no fees.

Plain HTML/CSS, no build step. Everything is in `index.html`.

## Updating the total

In `index.html`, find `<div class="progress" ...>` and change `data-raised` (and `data-donors`) to the numbers from your Zeffy dashboard. Numbers only, no `$` or commas. Update the "Last updated" date next to it.

## Starting a new project

1. Under **PAST PROJECTS**, copy the card template, fill it in for the finished project, and delete the "first project" note.
2. Under **CURRENT PROJECT**, replace the title, photo, intro, goal (`data-goal`), the story and budget, and the Zeffy link on the button.
3. Put photos in `assets/images/projects/`. Keep them under ~300 KB (WebP or JPG around 1200px wide).

Anything highlighted in yellow (`class="todo"`) still needs real content.

After editing `styles.css` or `main.js`, bump the `?v=` number where they're linked in `index.html`.
