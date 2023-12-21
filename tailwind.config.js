/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
    colors: {},
		extend: {
      fontFamily: {
        primary: ['IBM Plex Mono', 'sans-serif'],
      },
    }
	},
	plugins: [require('daisyui')],
  daisyui: {
    themes:[
      {
        custom: {
          primary: "#22092C",
          "primary-content": "#F8F4E3",
          secondary: "#960200",
        },
      },
      "custom"
    ]
  },
};
