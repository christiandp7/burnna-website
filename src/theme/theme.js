import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
// import { julesText, proximaNovaCondensed } from './fonts'

const themeSettigs = createMuiTheme({
	palette: {
		primary: {
			main: '#0A0A0A',
			contrastText: '#fff',
		},
		// secondary: {},
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
			fontSize: '3rem',
		},
		h2: {
			fontSize: '2.5rem',
		},
		h3: {
			fontSize: '2rem',
		},
		h4: {
			fontSize: '1.5rem',
		},
		h5: {
			fontSize: '1.25rem',
		},
		h6: {
			fontSize: '1rem',
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
	},
})

export default themeSettigs
