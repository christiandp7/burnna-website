import { julesText } from './fonts'

const themeSettigs = {
  typography: {
    fontFamily: 'Jules Text, Sans, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [julesText],
      },
    },
  },
};

export default themeSettigs