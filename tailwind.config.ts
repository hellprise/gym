import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				gray: { 1: '#c1c1bd', 2: '#12120a0f', 3: '#1212120f' },
				primary: '#f5f5f5',
				secondary: '#1c1c1c',
				error: '#f4502f'
			}
		},
		fontFamily: {
			// 'nunito-sans': ['Nunito Sans', 'sans-serif'],
			'open-sans': ['Open Sans', 'sans-serif'],
			rubik: ['Rubik', 'sans-serif']
		}
	},
	plugins: []
}
export default config
