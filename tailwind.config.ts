import { type Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#EF4E4E',
        dark: '#1F1F1F',
        light: '#F8F8F8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [typography],
}

export default config
