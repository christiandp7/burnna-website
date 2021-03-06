import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
// import { julesText, proximaNovaCondensed } from './fonts'

const themeSettigs = createMuiTheme({
	palette: {
		primary: {
			main: '#0A0A0A',
			contrastText: '#fff',
		},
		secondary: {
			main: '#fff',

			contastText: '#0A0A0A',
		},
		neutral: {
			light: '#CBCBCB',
			main: '#707070',
		},
	},

	typography: {
		fontFamily: [
			// '"Jules Text"',
			// '"Proxima Nova Condensed"',
			'"Karla"',
			'Sans',
			'Arial',
		].join(','),
		fontWeightRegular: 300,
		fontWeightMedium: 400,
		h1: {
			fontSize: '2.4rem',
		},
		h2: {
			fontSize: '2.2rem',
		},
		h3: {
			fontSize: '1.8rem',
		},
		h4: {
			fontSize: '1.4rem',
		},
		h5: {
			fontSize: '1.25rem',
		},
		h6: {
			fontSize: '1rem',
			fontFamily: '"Bodoni"',
			textTransform: 'uppercase',
		},
		subtitle1: {
			fontSize: '1rem', // Header links font-size
		},
		subtitle2: {
			fontSize: '0.875rem',
			fontFamily: '"Bodoni"',
			textTransform: 'uppercase',
		},
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				// '@font-face': [proximaNovaCondensed],
				// '@font-face': [julesText],

				body: {
					backgroundColor: 'white',
				},
			},
		},
		MuiLink: {
			root: {
				textUnderlineOffset: '1px',
			},
		},
		MuiButton: {
			root: {
				borderRadius: 0,
			},
		},
	},
})

export default themeSettigs
