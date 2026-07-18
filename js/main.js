/* ============================================================
   OFOQ AlNajah — Site engine
   Injects header/footer, handles EN/AR, nav, animations, form.
   ============================================================ */

/* ▼▼▼ EDIT THESE — your contact details & form key ▼▼▼ */
const CONFIG = {
  // WhatsApp number in FULL international format, digits only (no +, spaces or dashes)
  whatsapp:     "9610000000",
  phoneDisplay: "+961 00 000 000",
  phoneDial:    "+9610000000",
  email:        "info@ofoqalnajah.com",
  // Free access key from https://web3forms.com (30-sec signup with your email).
  // Until you paste it, the contact form will show a friendly fallback to WhatsApp.
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  social: {
    instagram: "#",
    facebook:  "#",
    linkedin:  "#",
  },
};
/* ▲▲▲ EDIT THESE ▲▲▲ */

const WA_LINK = "https://wa.me/" + CONFIG.whatsapp;

// Production domain — used for canonical / structured-data URLs. Update to your real domain.
const SITE_URL = "https://ofoqalnajah.com";

/* ---------- SVG icon set ---------- */
const IC = {
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6 1.9.8 2.6.9 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.3 8.3 0 1 1 12 20.3z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"/></svg>',
  li: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8H4v12h2.9V8zM5.4 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 13.4c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5.9-2.9 1.6V8H10.5v12h2.9v-6.7c0-1.3.9-1.8 1.8-1.8s1.9.5 1.9 1.9V20H20v-6.6z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
};

/* ---------- Header / Footer templates ---------- */
function headerHTML() {
  const link = (page, key, label) => `<a href="${page}.html" data-nav="${page}" data-i18n="nav.${key}">${label}</a>`;
  return `
  <div class="nav">
    <a class="brand" href="index.html" data-i18n-aria="a11y.brandHome" aria-label="OfoqAlNajah — Home">
      <img src="assets/logo-96.png" alt="OfoqAlNajah logo" width="44" height="44">
      <span class="brand-txt"><b data-i18n="brand.name">OFOQ</b><span data-i18n="brand.tag">AlNajah</span></span>
    </a>
    <nav class="nav-links" id="navLinks" data-i18n-aria="a11y.mainNav" aria-label="Main navigation">
      ${link("index","home","Home")}
      ${link("about","about","About")}
      ${link("services","services","Advisory")}
      ${link("markets","markets","Commodities &amp; Timing")}
      ${link("courses","courses","Training")}
      ${link("contact","contact","Contact")}
      <a class="btn btn-gold menu-cta" href="contact.html" data-i18n="nav.cta">Free Consultation</a>
    </nav>
    <div class="nav-right">
      <button class="lang-toggle" id="langToggle" type="button" data-i18n-aria="a11y.langToggle" aria-label="Switch language" data-i18n="lang.label">عربي</button>
      <a class="btn btn-gold nav-cta" href="contact.html" data-i18n="nav.cta">Free Consultation</a>
      <button class="hamburger" id="hamburger" type="button" data-i18n-aria="a11y.menuOpen" aria-label="Open menu" aria-controls="navLinks" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>`;
}

function tickerHTML() {
  let items = "";
  for (let i = 1; i <= 8; i++) items += `<span data-i18n="ticker.${i}"></span><i></i>`;
  const group = `<div class="ticker-item">${items}</div>`;
  return `<div class="ticker-track" aria-hidden="true">${group}${group}</div>`;
}

function footerHTML() {
  return `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/logo-96.png" alt="OfoqAlNajah" width="52" height="52" loading="lazy" decoding="async">
        <p data-i18n="footer.about"></p>
        <p class="footer-tag" data-i18n="footer.built"></p>
        <div class="social">
          <a class="s-wa"  href="${WA_LINK}" target="_blank" rel="noopener" aria-label="WhatsApp">${IC.wa}</a>
          <a class="s-ig"  href="${CONFIG.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${IC.ig}</a>
          <a class="s-fb"  href="${CONFIG.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${IC.fb}</a>
          <a class="s-li"  href="${CONFIG.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${IC.li}</a>
        </div>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.quick">Quick Links</h4>
        <a href="index.html" data-i18n="nav.home">Home</a>
        <a href="about.html" data-i18n="nav.about">About</a>
        <a href="courses.html" data-i18n="nav.courses">Training</a>
        <a href="contact.html" data-i18n="nav.contact">Contact</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.serv">Our Services</h4>
        <a href="services.html" data-i18n="footer.serv.advisory">Investment Advisory</a>
        <a href="markets.html" data-i18n="footer.serv.markets">Commodities &amp; Timing</a>
        <a href="courses.html" data-i18n="footer.serv.courses">Training &amp; Courses</a>
        <a href="services.html" data-i18n="footer.serv.wealth">Wealth Planning</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.contact">Get in Touch</h4>
        <a class="f-wa" href="${WA_LINK}" target="_blank" rel="noopener">WhatsApp</a>
        <a class="f-email" href="mailto:${CONFIG.email}">${CONFIG.email}</a>
        <a class="f-phone" href="tel:${CONFIG.phoneDial}">${CONFIG.phoneDisplay}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="footer.rights">© 2026 OfoqAlNajah. All rights reserved.</span>
    </div>
  </div>`;
}

/* ---------- i18n ---------- */
function t(key, lang) {
  const L = I18N[lang] || I18N.en;
  return (key in L) ? L[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
}
function getLang() {
  try {
    const p = new URLSearchParams(location.search).get("lang");
    if (p === "ar" || p === "en") { localStorage.setItem("ofoq_lang", p); return p; }
  } catch (e) {}
  return localStorage.getItem("ofoq_lang") || "en";
}
function setLang(lang) { localStorage.setItem("ofoq_lang", lang); applyLang(lang); }

function applyLang(lang) {
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  if (lang === "ar") ensureArabicFont();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n"), lang);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"), lang));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"), lang));
  });

  // Document title + meta description (per page)
  const page = html.getAttribute("data-page");
  if (page) {
    document.title = t("meta." + page + ".title", lang);
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta." + page + ".desc", lang));
  }
}

/* ---------- Active nav ---------- */
function setActiveNav() {
  let file = location.pathname.split("/").pop() || "index.html";
  if (file === "" || file === "/") file = "index.html";
  const page = file.replace(".html", "");
  document.querySelectorAll(".nav-links a[data-nav]").forEach(a => {
    if (a.getAttribute("data-nav") === (page || "index")) { a.classList.add("active"); a.setAttribute("aria-current", "page"); }
  });
}

/* ---------- Header scroll ---------- */
function initHeaderScroll() {
  const h = document.querySelector(".site-header");
  if (!h) return;
  const onScroll = () => h.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Mobile nav ---------- */
function initMobileNav() {
  const burger = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");
  if (!burger || !links) return;
  const items = () => links.querySelectorAll("a");
  const toggle = (open) => {
    const isOpen = open ?? !links.classList.contains("open");
    links.classList.toggle("open", isOpen);
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.setAttribute("aria-label", t(isOpen ? "a11y.menuClose" : "a11y.menuOpen", getLang()));
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) { requestAnimationFrame(() => { const f = items()[0]; if (f) f.focus(); }); }
    else if (document.activeElement && links.contains(document.activeElement)) burger.focus();
  };
  burger.addEventListener("click", () => toggle());
  items().forEach(a => a.addEventListener("click", () => toggle(false)));
  document.addEventListener("keydown", (e) => {
    if (!links.classList.contains("open")) return;
    if (e.key === "Escape") { toggle(false); return; }
    if (e.key === "Tab") {
      const list = items(); if (!list.length) return;
      const first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el, i) => { el.style.transitionDelay = (i % 4) * 80 + "ms"; io.observe(el); });
}

/* ---------- FAQ accordion ---------- */
function initFAQ() {
  document.querySelectorAll(".faq-item").forEach((item, i) => {
    const btn = item.querySelector(".faq-q");
    const ans = item.querySelector(".faq-a");
    if (!btn || !ans) return;
    ans.id = ans.id || ("faq-panel-" + i);
    btn.setAttribute("aria-controls", ans.id);
    btn.setAttribute("aria-expanded", "false");
    ans.setAttribute("aria-hidden", "true");
    btn.addEventListener("click", () => {
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      ans.setAttribute("aria-hidden", String(!open));
      ans.style.maxHeight = open ? ans.scrollHeight + "px" : null;
    });
  });
}

/* ---------- Contact form (Web3Forms) ---------- */
function initForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const msg = form.querySelector(".form-msg");
  const btn = form.querySelector('[type="submit"]');
  const lang = getLang();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg.className = "form-msg";
    // Client-side validation (required fields + email format)
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const lang = getLang();
    const data = Object.fromEntries(new FormData(form).entries());
    const keyMissing = !CONFIG.web3formsKey || CONFIG.web3formsKey.startsWith("YOUR_");
    if (keyMissing) {
      // Fallback until a Web3Forms key is set: hand the enquiry off to WhatsApp, prefilled.
      const txt = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "-"}\nInterest: ${data.interest || "-"}\n\n${data.message || ""}`;
      window.open(WA_LINK + "?text=" + encodeURIComponent(txt), "_blank", "noopener");
      form.reset();
      msg.classList.add("ok");
      msg.textContent = t("contact.f.ok", lang);
      return;
    }
    const origHTML = btn.innerHTML;
    btn.disabled = true;
    btn.textContent = t("contact.f.sending", lang);
    try {
      data.access_key = CONFIG.web3formsKey;
      data.subject = "New enquiry — OfoqAlNajah website";
      data.from_name = "OfoqAlNajah Website";
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const out = await res.json();
      if (out.success) {
        form.reset();
        msg.classList.add("ok");
        msg.textContent = t("contact.f.ok", getLang());
      } else { throw new Error(out.message || "failed"); }
    } catch (err) {
      msg.classList.add("err");
      msg.textContent = t("contact.f.err", getLang());
    } finally {
      btn.disabled = false;
      btn.innerHTML = origHTML;
      applyLang(getLang()); // re-apply label translation on the button
    }
  });
}

/* ---------- Floating WhatsApp ---------- */
function initWhatsApp() {
  if (document.querySelector(".wa-float")) return;
  const a = document.createElement("a");
  a.className = "wa-float";
  a.href = WA_LINK; a.target = "_blank"; a.rel = "noopener";
  a.setAttribute("data-i18n-aria", "a11y.whatsapp");
  a.setAttribute("aria-label", t("a11y.whatsapp", getLang()));
  a.innerHTML = IC.wa;
  document.body.appendChild(a);
}

/* ---------- Fill dynamic contact fields (contact page) ---------- */
function fillContact() {
  const set = (sel, href, text) => document.querySelectorAll(sel).forEach(el => {
    if (href) el.setAttribute("href", href);
    if (text != null) el.textContent = text;
  });
  set('[data-contact="wa"]', WA_LINK, CONFIG.phoneDisplay);
  set('[data-contact="email"]', "mailto:" + CONFIG.email, CONFIG.email);
  set('[data-contact="phone"]', "tel:" + CONFIG.phoneDial, CONFIG.phoneDisplay);
}

/* ---------- Arabic web font (loaded only when Arabic is active) ---------- */
function ensureArabicFont() {
  if (document.getElementById("ar-font")) return;
  const l = document.createElement("link");
  l.id = "ar-font"; l.rel = "stylesheet";
  l.href = "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap";
  document.head.appendChild(l);
}

/* ---------- Mark decorative SVGs / glyphs for assistive tech ---------- */
function markDecorativeSvgs() {
  document.querySelectorAll('svg:not([role="img"])').forEach(s => {
    s.setAttribute("aria-hidden", "true");
    s.setAttribute("focusable", "false");
  });
  document.querySelectorAll(".faq-q .ic").forEach(i => i.setAttribute("aria-hidden", "true"));
}

/* ---------- SEO: JSON-LD structured data ---------- */
function injectStructuredData() {
  const page = document.documentElement.getAttribute("data-page") || "home";
  const path = page === "home" ? "/" : "/" + page + ".html";
  const social = Object.values(CONFIG.social).filter(u => u && u !== "#");
  const add = (obj) => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  };
  add({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "FinancialService"],
        "@id": SITE_URL + "/#org",
        "name": "OfoqAlNajah",
        "alternateName": "أفق النجاح",
        "url": SITE_URL + "/",
        "logo": SITE_URL + "/assets/icon-512.png",
        "image": SITE_URL + "/assets/og-image.jpg",
        "description": t("meta.home.desc", "en"),
        "email": CONFIG.email,
        "telephone": CONFIG.phoneDial,
        "sameAs": social,
        "areaServed": "MENA",
        "knowsLanguage": ["en", "ar"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": CONFIG.phoneDial,
          "email": CONFIG.email,
          "contactType": "customer service",
          "availableLanguage": ["English", "Arabic"]
        }
      },
      {
        "@type": "WebSite",
        "@id": SITE_URL + "/#website",
        "url": SITE_URL + "/",
        "name": "OfoqAlNajah",
        "publisher": { "@id": SITE_URL + "/#org" },
        "inLanguage": ["en", "ar"]
      }
    ]
  });
  if (page !== "home") {
    add({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": t("nav.home", "en"), "item": SITE_URL + "/" },
        { "@type": "ListItem", "position": 2, "name": t("meta." + page + ".title", "en").split(" — ")[0], "item": SITE_URL + path }
      ]
    });
  }
  if (page === "courses") {
    const qa = [];
    for (let i = 1; ("courses.faq.q" + i) in I18N.en; i++) {
      qa.push({
        "@type": "Question",
        "name": t("courses.faq.q" + i, "en"),
        "acceptedAnswer": { "@type": "Answer", "text": t("courses.faq.a" + i, "en") }
      });
    }
    add({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": qa });
  }
}

/* ---------- Boot ---------- */
document.documentElement.classList.add("js"); // enables reveal-on-scroll; no-JS keeps content visible
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const footer = document.querySelector(".site-footer");
  if (header) header.innerHTML = headerHTML();
  if (footer) footer.innerHTML = footerHTML();

  // Market ticker strip, placed directly beneath the hero
  const hero = document.querySelector(".hero, .page-hero");
  if (hero && !document.querySelector(".ticker")) {
    const tk = document.createElement("div");
    tk.className = "ticker";
    tk.innerHTML = tickerHTML();
    hero.insertAdjacentElement("afterend", tk);
  }

  setActiveNav();
  fillContact();
  applyLang(getLang());
  injectStructuredData();

  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.addEventListener("click", () => setLang(getLang() === "en" ? "ar" : "en"));

  initHeaderScroll();
  initMobileNav();
  initFAQ();
  initForm();
  initWhatsApp();
  initReveal();
  markDecorativeSvgs();
});
