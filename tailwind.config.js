/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: '#363062',
			'primary-variant': '#4D4C7D',
			'primary-dark': '#252051',
			secondary: '#F99417',
			white: '#F5F5F5'
		},
		extend: {
			fontFamily: {
				primary: ['IBM Plex Mono', 'sans-serif']
			},
			screens: {
				'3xl': '2000px'
			},
			animation: {
				shake: 'shake 1s ease-in-out'
			},
			keyframes: {
				shake: {
					'10%, 90%': {
					  transform: 'translate(-1px, 0) rotate(-10deg)'
					},
					'20%, 80%': {
					  transform: 'translate(2px, 0) rotate(15deg)'
					},
				  
					'30%, 50%, 70%': {
					  transform: 'translate(-3px, 0) rotate(-20deg)'
					},
				  
					'40%, 60%': {
					  transform: 'translate(3px, 0) rotate(20deg)'
					}
				}
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
					'primary-dark': '#252051',
					secondary: '#F99417',
					white: '#F5F5F5'
				}
			},
			'custom'
		]
	}
};
