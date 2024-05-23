/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          from: { opacity: '0%', scale: '95%', },
          to: { opacity: '100%', scale: '100%', },
        }, 
      },
      animation: {
        'animation-in': '0.6s ease-out 0 fade-in',
        'animation-out': '0.75s ease-in 0 fade-out',
      },
      colors: {
        "body": "#0E0F11",
        "border": "#282828",
        "navbar": "#2323233B",
        "primary":"#FF942C",
        "text": "#F3F3F3",
        "twhite": "#f6f6f6",
        "tblack": "#0E0F11",
        "tcontrast": "#C8C8C8",
        "tcontrasthard": "#767676",
        "card": "#161616"
      },
      fontFamily: {
        "marcellus": '"Marcellus", serif',
        "manjari": '"Manjari", sans-serif',
      }
    },
  },
  plugins: [],
}