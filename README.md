# Omniscope

From Data to Direction. A single-page, 3D-animated marketing site for Omniscope, a market intelligence, research and analytics company.

## Files

```
omniscope/
├── index.html      page structure and content
├── css/style.css   theme, layout and animation styles
├── js/main.js      canvas/SVG 3D animations and interactions
├── .nojekyll       tells GitHub Pages to serve files as-is
└── README.md
```

No build step and no dependencies. The only external request is Google Fonts (Inter), with a system-font fallback.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

Then visit http://localhost:8000

## Deploy on GitHub Pages

1. Create a new repository on GitHub (for example `omniscope`).
2. Upload everything in this folder to the repository root (keep `index.html` at the top level).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
5. After a minute your site is live at `https://<your-username>.github.io/<repository-name>/`.

## Before going public

- **Contact form:** it validates input but is not connected to a backend, so nothing is sent. Connect a form service (for example Formspree or Web3Forms) or your own endpoint by changing the submit handler near the end of `js/main.js`.
- **Privacy policy and terms:** the footer links are placeholders.
- **Sample data:** all dashboards, figures and samples are synthetic and labelled illustrative. Replace them only with client-approved or properly licensed data.
- **Name and domain:** check the Omniscope name, domain and trademark before official use.

## Notes

- The globe, funnel, network ring, road and glass-panel scenes are drawn with HTML canvas and SVG (no 3D engine), and pause when off-screen.
- Animation respects the visitor's reduced-motion setting, and colours follow light/dark mode.
- Theme colours are CSS variables at the top of `css/style.css`.
