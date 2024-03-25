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
			colors:{
				'custom-left-blue':'#4E38F5',
				'custom-left-bold-blue':'#462BDA',
				'custom-red':'#fff6f5',
				'custom-bold-red':'#FA979A',
				'custom-yellow':'#FFFBF2',
				'custom-bold-yellow':'#E4C167',
				'custom-green':'#F2FBFA',
				'custom-bold-green':'#32A588',
				'custom-blue':'#F3F3FD',
				'custom-bold-blue':'#555C96',
			}
		},
	},
	plugins: [],
}

