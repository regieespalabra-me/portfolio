# Regie C. Espalabra | Personal Web Portfolio

CIT 240 (Open Source Programming) capstone. A responsive portfolio built with HTML5, CSS3, and vanilla JavaScript, hosted on GitHub Pages.

**Live site:** https://RegieEspalabra.github.io/

## Features
- Semantic HTML5 layout (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Dark-first design (light theme available) with Flexbox, Grid, and media queries at 640px and 900px
- Mobile menu, smooth scrolling, dark/light theme toggle (saved in `localStorage`), and a project filter
- Accessible by default: skip link, visible focus, reduced-motion support

## Project structure
```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/   # profile.jpg, project1.png, project2.png, project3.png
```

## Run locally
```bash
git clone https://github.com/RegieEspalabra/RegieEspalabra.github.io.git
cd RegieEspalabra.github.io
# open index.html in a browser, or serve it:
python -m http.server 8000   # then visit http://localhost:8000
```

## Deploy to GitHub Pages
1. Push the repo to GitHub (`main` branch).
2. Open **Settings → Pages**.
3. Set Source to **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
4. Wait 1-2 minutes, then open the live URL.

## Customize
Replace the LinkedIn link in `index.html`, edit the project cards, and add images to `assets/`.

## License
MIT
