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
			main: '#707070',
		},
	},

	typography: {
		fontFamily: [
			// '"Jules Text"',
			'"Proxima Nova Condensed"',
			'Sans',
			'Arial',
		].join(','),
		h6: {
			fontFamily: '"Jules Text"',
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
	},
})

export default themeSettigs
