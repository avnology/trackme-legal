# Track Me — Legal Center

The official legal site for **Track Me** (تراك مي), the app that connects mobile-truck owners with customers. Hosts the three documents the app stores require and users deserve:

- **Privacy Policy** — `/privacy`
- **Terms of Service** — `/terms`
- **Account & Data Deletion** — `/account-deletion` (the URL Google Play requires)

Arabic-first (RTL) with an English toggle. The visual language is lifted from the app: the brand red `#E72B2F` (`AppColors.primary`), the secondary orange `#F8711E`, the `#FF5256 → #F8711E` CTA gradient, the Facebook-style dark palette (`#18191A` / `#242526`), Poppins (Latin) paired with Alexandria (Arabic).

## Stack

- **Next.js 16** (App Router, TypeScript, `output: "export"` — pure static site)
- **next/font/local** — self-hosted Poppins + Alexandria (no external requests)
- Plain hand-written CSS (`app/globals.css`) driven by design tokens — no UI framework
- Zero client data collection — the site is static; language/theme are stored only in your own browser's `localStorage`

## Structure

```
app/
  layout.tsx              # fonts, metadata, Nav + Footer shell, theme pre-paint
  page.tsx                # the Legal Center hub (3 cards)
  privacy/page.tsx        # thin wrappers around <LegalDoc slug="…">
  terms/page.tsx
  account-deletion/page.tsx
components/
  LegalDoc.tsx            # renders a document + sticky scroll-spy table of contents
  Nav.tsx  Footer.tsx  LangToggle.tsx  ThemeToggle.tsx  LangContext.tsx  icons.tsx
lib/
  legal.ts               # ALL document copy (AR + EN) as structured sections
  i18n.ts                # UI chrome strings (AR + EN)
  config.ts              # contact emails, store links, last-updated date, basePath helper
```

## Editing the documents

All legal text lives in **`lib/legal.ts`** as structured section arrays — one per language, kept in the same order so the shared table of contents and deep-links line up. Edit the copy there; the renderer, TOC, and reading-time estimate update automatically. Contact emails and the "last updated" date live in **`lib/config.ts`**.

The content reflects how the app actually works — location tracking (foreground only), the marketplace, orders, chat, job listings, Paymob payments, FCM notifications, and Google/Apple sign-in. It is **not** a substitute for review by a qualified lawyer before publication in a specific jurisdiction.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Deploying

The site lives on the **`legal.trackme.top`** subdomain, deliberately *not* the apex — `trackme.top` itself is reserved for the marketing landing page and anything else that comes later.

`NEXT_PUBLIC_BASE_PATH` is unset, so pages resolve at the subdomain root: `legal.trackme.top/privacy`, `/terms`, `/account-deletion`.

**Current host — Vercel** (project `trackme-legal`). The repo is deployed there as an interim host until our own server is ready. The subdomain is already attached to the project; it needs one DNS record at GoDaddy:

| Type | Name | Value |
| --- | --- | --- |
| A | `legal` | `76.76.21.21` |

Vercel issues the TLS certificate automatically once that record propagates.

**Later — Docker / our own server.** The `Dockerfile` builds the static export and serves it with a tiny nginx (`nginx.conf` maps clean URLs like `/privacy` onto the exported `/privacy.html`), so moving off Vercel is a DNS change plus:

```bash
docker build -t trackme-legal . && docker run -p 8080:80 trackme-legal
```

## Store listings

Both stores need the privacy URL, and Google Play additionally requires the account-deletion URL:

| Field | URL |
| --- | --- |
| Privacy Policy (App Store + Play) | `https://legal.trackme.top/privacy` |
| Account deletion (Play Data safety) | `https://legal.trackme.top/account-deletion` |
| Terms of Service | `https://legal.trackme.top/terms` |
