# BREDDY — Stage 1

Premium Nuxt + Vue website for BREDDY, a handcrafted wood and epoxy resin workshop.

## Stack

- Nuxt 3
- Vue 3
- Vuetify 3
- Tailwind CSS
- Nuxt i18n
- Nuxt SEO
- Schema.org via Nuxt SEO

## Install

```bash
npm install
npm run dev
```

Then open the local URL shown by Nuxt.

## Important

The photographs currently use Unsplash URLs as temporary generic imagery. Replace them with local WebP/AVIF images later for production performance and brand consistency.

The quote form is intentionally frontend-only in Stage 1. Stage 2 can connect it to email/Formspree/Resend/Firebase or another preferred backend.

The logo supplied for this project is stored at `public/images/logo-breddy.png`.


## Importante
Esta versión Nuxt 3 no usa `@nuxtjs/seo`; usa `nuxt-schema-org` directamente.


## Instalación limpia recomendada

Este proyecto usa Nuxt 3.21.11. Para evitar restos de instalaciones anteriores, en Windows ejecuta:

```bat
rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
npm cache verify
npm install
npm run dev
```

Si el puerto 3000 está ocupado, Nuxt puede usar 3001; eso es normal.

Esta versión incluye `nuxt-schema-org` y su dependencia `nuxt-site-config` explícitamente.
