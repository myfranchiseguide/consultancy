# Selling Without Selling — Landing Page

This folder is pre-structured to drop straight into your existing repo so the page publishes at:

`https://asiafranchiseguide.com/academy/personalbranding/`

```
academy/
  personalbranding/
    index.html          the whole page
    assets/images/       every photo, screenshot, and video poster frame
    assets/videos/       the four testimonial clips
```

## How to add this to your existing repo

**Option A — GitHub's website, no terminal needed:**
1. Open your repo on github.com and navigate into it until you're at the root (or wherever `tfi-v2` already lives, to match the same level).
2. Click "Add file" → "Upload files."
3. Drag the whole `academy` folder from this download in. GitHub will preserve the folder structure automatically.
4. Commit directly to the branch that's connected to your live deploy (check your host, e.g. GitHub Pages settings or your Netlify/Vercel project, to confirm which branch that is, usually `main`).
5. Whatever's rebuilding your site on push (GitHub Pages, Netlify, Vercel, Cloudflare Pages) will pick it up automatically. Give it a few minutes, then check the URL.

**Option B — command line, if you're comfortable with git:**
```
cd path/to/your/repo
cp -r /path/to/this/download/academy ./academy
git add academy
git commit -m "Add personal branding workshop landing page"
git push
```

## One thing to check first

Look at how `tfi-v2` is actually stored in your repo (is it a flat `tfi-v2.html` file, or a folder `tfi-v2/index.html`?). If your setup uses flat `.html` files rather than folders with `index.html`, rename `academy/personalbranding/index.html` to `academy/personalbranding.html` and drop the `assets` folder alongside it at the same level instead, adjusting nothing else, the paths inside the HTML are already relative so `assets/...` will still resolve correctly either way.

## Notes

- The "Reserve my seat" buttons (nav, hero, and pricing card) all link to the Billplz payment page.
- Videos are compressed (~1.5–2MB each). Swap files in `assets/videos/` to update a testimonial, keeping the same filename so `index.html` doesn't need edits.
- No open placeholders remain in the copy as of this export.

