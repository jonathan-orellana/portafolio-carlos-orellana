# Carlos Orellana — Portfolio

A single-page personal portfolio website. Dark, terminal-inspired theme built with
plain **HTML, CSS, and vanilla JavaScript** — no build step, no frameworks, no dependencies.

## Sections

- **Home** — intro, animated terminal line, and links (GitHub, LinkedIn, résumé)
- **Projects** — a featured build plus a grid of project cards
- **About** — short bio, education / currently / beyond-code cards, and a toolbox of skills
- **Contact** — email button and social links

It is fully responsive: on mobile the nav collapses to a menu button, the social links
become icon buttons, and every section stacks into a single column.

## File structure

```
.
├── index.html              # all the markup
├── css/
│   └── styles.css          # all styling (theme variables + responsive rules)
├── js/
│   └── main.js             # menu toggle, terminal typing effect, mailto
├── assets/
│   ├── jonathan.jpg        # profile photo
│   └── carlos-orellana-resume.pdf
└── README.md
```

## Running locally

No build tools required — just open the file:

```bash
# option 1: open directly
open index.html

# option 2: run a tiny local server (recommended, avoids any file:// quirks)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a new repository and push these files to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   pick `main` and the `/ (root)` folder, then **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two.

## Customizing

- **Accent color** — change the `--accent` variable at the top of `css/styles.css`.
- **Résumé** — replace `assets/carlos-orellana-resume.pdf` (keep the filename, or
  update the two `resume ↗` links in `index.html`).
- **Email** — edit the address in `js/main.js`.
- **Content** — all copy lives in `index.html`.

## Credits

Type: [JetBrains Mono](https://www.jetbrains.com/lp/mono/). Everything else hand-built.

© 2026 Carlos Orellana
