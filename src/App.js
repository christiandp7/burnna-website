import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
// layouts
import MainLayout from './layouts/MainLayout'
// Pages
import Home from './pages/Home/Home.jsx'
import Collection from './pages/Collection'
// styles
import { create } from 'jss'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'
// data
import theme from './theme'

const jss = create({
	plugins: [...jssPreset().plugins],
})

// const theme = createMuiTheme(themeSettigs)

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* <StylesProvider injectFirst jss={jss}> */}
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<MainLayout>
						<Route exact path="/collection" component={Collection} />
					</MainLayout>
				</Switch>
			</Router>
			{/* </StylesProvider> */}
		</ThemeProvider>
	)
}

export default App
