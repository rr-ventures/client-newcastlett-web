/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // A refined, professional navy blue palette (less "tech", more "club")
                brand: {
                    50: '#f0f4f8',
                    100: '#d9e2ec',
                    200: '#bcccdc',
                    300: '#9fb3c8',
                    400: '#829ab1',
                    500: '#627d98',
                    600: '#486581',
                    700: '#334e68',
                    800: '#243b53',
                    900: '#102a43', // Deep Navy
                    950: '#061623',
                },
                accent: {
                    500: '#e1ad01', // Gold/Yellow for subtle highlights
                    600: '#b48a01',
                }
            }
        },
	},
	plugins: [],
}
