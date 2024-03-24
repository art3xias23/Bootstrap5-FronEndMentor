/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		fontFamily: {
			custom: ['med', 'sans-serif'],
			custombold: ['bold', 'sans-serif'],
			customextra: ['ebold', 'sans-serif'],
			customnew: ['new', 'sans-serif'],
		},

		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
		},
	},
	plugins: [],
}

