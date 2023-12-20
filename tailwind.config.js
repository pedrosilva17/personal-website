/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: '#00ff00',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

