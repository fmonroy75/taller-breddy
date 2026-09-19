import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}'
  ],

  theme: {
    extend: {
      colors: {
        breddy: {
          ink: '#171614',
          charcoal: '#24211D',
          wood: '#6F604D',
          sand: '#E9E1D5',
          cream: '#F6F3EE',
          mist: '#D9D3CA'
        }
      },

      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif']
      },

      boxShadow: {
        soft: '0 20px 60px rgba(23, 22, 20, 0.10)'
      }
    }
  }
}