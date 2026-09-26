import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './composables/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        breddy: {
          ink: '#171717',
          charcoal: '#171717',
          dark: '#242424',
          ivory: '#F7F5F1',
          stone: '#C9C2B8',
          bronze: '#9B7454',
          surface: '#F7F5F1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'Arial', 'sans-serif']
      }
    }
  }
}
