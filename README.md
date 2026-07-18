# OfoqAlNajah — Website

Marketing website for **OfoqAlNajah** (أفق النجاح) — investment advisory, commodities & strategic timing, and financial training. Bilingual **English / Arabic** (with full RTL). Pure static HTML/CSS/JS — no build step, no backend.

---

## 🗂 Structure

```
index.html        Home
about.html        About / Vision / Mission / Values
services.html     Investment Advisory
markets.html      Commodities & Strategic Timing
courses.html      Training & Education + FAQ
contact.html      Contact form + details
css/styles.css    All styling (brand colours as CSS variables at the top)
js/i18n.js        ← ALL text content (English + Arabic) lives here
js/main.js        ← Contact details & settings (CONFIG) live at the top
assets/           Logo, favicon, generated images
```

## ✏️ How to edit content

**All the words on the site** live in one file: [`js/i18n.js`](js/i18n.js).
Each item has an English (`en`) and Arabic (`ar`) version — edit the text between the quotes. Example:

```js
"home.hero.title": "Your Horizon to <span class='g'>Financial Success</span>.",
```

## ⚙️ Your details (IMPORTANT — edit before going live)

Open [`js/main.js`](js/main.js) and edit the `CONFIG` block at the very top:

```js
const CONFIG = {
  whatsapp:     "9610000000",       // full international number, digits only
  phoneDisplay: "+961 00 000 000",
  phoneDial:    "+9610000000",
  email:        "info@ofoqalnajah.com",
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  social: { instagram: "#", facebook: "#", linkedin: "#" },
};
```

### Make the contact form work (free, 1 minute)
1. Go to **https://web3forms.com** → enter your email → get a free **Access Key**.
2. Paste it as `web3formsKey` above.
3. Done — form submissions now arrive in your email. (Until then, the form gently falls back to WhatsApp.)

## 🌐 Colours

Brand palette (sampled from the logo) is defined once at the top of [`css/styles.css`](css/styles.css):

- Navy `#12226D` · Gold `#D0A945` · White `#F8FCFF`

## 💻 Preview locally

The site uses a small script to load the shared header/footer, so open it through a local server (not by double-clicking the file):

```bash
# with Python
python -m http.server 8080
# then open http://localhost:8080
```

## 🚀 Deploy (Vercel)

This repo is connected to Vercel. **Every `git push` auto-deploys.**

```bash
git add .
git commit -m "Update content"
git push
```

No build command needed — it's a static site (Framework Preset: **Other**).
