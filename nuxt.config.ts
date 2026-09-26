export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  experimental: {
    appManifest: false
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'vuetify-nuxt-module',
    '@nuxtjs/i18n'
  ],

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/css/main.css'
  ],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'breddyLight',
        themes: {
          breddyLight: {
            dark: false,
            colors: {
              primary: '#171717',
              secondary: '#9B7454',
              surface: '#F7F5F1',
              background: '#F7F5F1'
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
        { name: 'theme-color', content: '#171717' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://www.tallerbreddy.com'
    }
  }
})
