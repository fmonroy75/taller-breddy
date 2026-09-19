export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    'vuetify-nuxt-module',
    '@nuxtjs/i18n'
  ],
  experimental: {
    appManifest: false
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/css/main.css'
  ],

  vuetify: {
    moduleOptions: {
      /* Keep Vuetify available for robust form/navigation components.
         The visual identity is controlled primarily by Tailwind + CSS. */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'breddyLight',
        themes: {
          breddyLight: {
            dark: false,
            colors: {
              primary: '#171614',
              secondary: '#6F604D',
              surface: '#F6F3EE',
              background: '#F6F3EE'
            }
          }
        }
      }
    }
  },

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', name: 'Français', language: 'fr-CA', file: 'fr.json' },
      { code: 'en', name: 'English', language: 'en-CA', file: 'en.json' }
    ],
    langDir: 'locales'
  },


  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'theme-color', content: '#171614' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://images.unsplash.com' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://www.tallerbreddy.com'
    }
  },

  vite: {
  server: {
    hmr: false
  }
}
})
