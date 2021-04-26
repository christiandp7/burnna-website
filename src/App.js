import React from 'react'
import MainLayout from './Layouts/MainLayout'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import themeSettigs from './theme'

const theme = createMuiTheme(themeSettigs)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
