# Vasool Collection Tracker — Website

Static marketing site for **Vasool Collection Tracker** (Android package `com.ks.vasool`).
Structure and layout mirror the VasoolBook site, rebranded with the app's teal / green / gold icon palette.

## 📦 Contents

| File | Purpose |
|---|---|
| `index.html` | Landing page — hero, features, pricing, comparison table, download |
| `user-guide.html` | Multi-language user guide shell (loads `guide-content/<lang>.js`) |
| `guide-content/*.js` | Guide copy in 6 languages: `en`, `ta`, `hi`, `ml`, `te`, `kn` |
| `privacy-policy.html` | Privacy policy |
| `terms.html` | Terms of service |
| `vct.png` | App icon (512×512), used as favicon + header logo |
| `Frame_10.png` | Hero screenshot — **placeholder, replace with a real app screenshot** |
| `docs/USER_GUIDE.md` | Markdown source of the guide content |

## 🎨 Brand palette

Taken from the app icon:

```css
--primary:      #11766D;  /* icon teal background   */
--primary-light:#16A396;
--accent:       #D9910F;  /* rupee gold             */
--accent-light: #F5B72E;
--gold:         #FFD866;
--dark-teal:    #062A26;  /* hero / footer          */
--light:        #F4FAF8;
```

Gold is used for text on dark backgrounds and for buttons with dark-teal text — gold with
white text does not meet contrast requirements, so keep that pairing.

## ⚠️ Before going live

These values were carried over from the VasoolBook site and are marked with `TODO` comments
in `index.html`. Verify them against the real app before publishing:

1. **Stats section** — "1000+ Active Users" and "4.9★ User Rating".
2. **Pricing** — Base ₹149 / Premium ₹249 / Diamond ₹299 and the yearly figures, plus the
   feature split in the comparison table, must match the real Play Billing products for
   `com.ks.vasool`.
3. **Hero screenshot** — `Frame_10.png` is the VasoolBook dashboard.
4. **Guide version** — the guide says "v1.0"; update to the shipping version.
5. **Contact email** — `developer.nativeapps@gmail.com` in `privacy-policy.html` and
   `terms.html`.
6. **Google Search Console** — add a fresh verification file/meta tag for this domain.
   (The VasoolBook verification token was deliberately not copied.)

## 🚀 Deploy

The site is 100% static — no build step, no backend.

- **GitHub Pages** — push to a repo, then Settings → Pages → source `main` / root.
- **Netlify** — drag the folder onto netlify.com.
- **Vercel** — import the repo, framework preset "Other".
- **Firebase Hosting** — `firebase init hosting` (public dir `.`) then `firebase deploy`.

## 🧪 Local preview

```bash
python3 -m http.server 8766
```

Then open http://127.0.0.1:8766 — a `.claude/launch.json` config named
`vasool-tracker-site` runs the same command.

## 🌐 Adding a guide language

1. Copy `guide-content/en.js` to `guide-content/<code>.js` and translate.
2. Add `{ code: '<code>', label: '<native name>' }` to the `LANGS` array in `user-guide.html`.
3. Add a link in the guide banner in `index.html`.

## 📞 Support

App listing: https://play.google.com/store/apps/details?id=com.ks.vasool
