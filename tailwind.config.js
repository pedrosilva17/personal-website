/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: '#363062',
			'primary-variant': '#4D4C7D',
			secondary: '#F99417',
			white: '#F5F5F5'
		},
		extend: {
			fontFamily: {
				primary: ['IBM Plex Mono', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				custom: {
					primary: '#363062',
					'primary-variant': '#4D4C7D',
					secondary: '#F99417',
					white: '#F5F5F5'
				}
			},
			'custom'
		]
	}
};
