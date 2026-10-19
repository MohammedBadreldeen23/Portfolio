# Mohammed Badreldeen — Personal Portfolio

A static portfolio built with HTML, CSS, and vanilla JavaScript. No database, build tools, or package installation are required.

## Files
- `index.html` — homepage, projects, skills, and grouped experience timeline.
- `details.html` — reusable project/event details page driven by the `?id=` query parameter.
- `style.css` — original styling plus responsive refinements.
- `script.js` — portfolio data, filtering, details rendering, navigation, profile drawer, and language toggle.
- `.nojekyll` — helps GitHub Pages serve files without Jekyll processing.

## Important: restore your original assets
The source provided for this update contained the HTML/CSS/JS text, but did not include the actual image, icon, or CV files. Before publishing, copy the existing `SRC/` and `assets/` directories from your original website into this project folder, preserving their structure. Check that `assets/Mohammed cv.pdf` and the images referenced by `script.js` exist with exactly the same capitalization.

## Test locally
Open `index.html` in a browser. Select a work card to open `details.html?id=...`. The language control switches the interface between English and Arabic; some original project descriptions and experience paragraphs remain in English and can be translated/edited in `script.js` and the HTML.

## Publish on GitHub Pages
1. Create a new GitHub repository (for example, `portfolio`).
2. Upload the contents of this folder and the original `SRC/` and `assets/` directories to the repository root.
3. Commit and push the files.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to finish deploying and open the URL shown in Settings → Pages.

This site is static and does not require a database or backend server.
