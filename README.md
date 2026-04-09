# Wide View Solutions Ltd — Website

Marketing website for Wide View Solutions Ltd, built with React + Vite.

## Development

```bash
npm install
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## Deployment (Cloudflare Pages)

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 18+ |

## Customisation

| What | Where |
|---|---|
| Contact email | `src/components/CTA.jsx` and `src/components/Footer.jsx` |
| LinkedIn URL | `src/components/Footer.jsx` — `href="#"` on the LinkedIn `<a>` |
| GitHub URL | `src/components/Footer.jsx` — `href="#"` on the GitHub `<a>` |
| Book-a-call link | `src/components/CTA.jsx` — replace `mailto:` with your calendar URL |
| Logo | Replace `src/components/Logo.jsx` and `public/logo.svg` with your actual brand asset |
