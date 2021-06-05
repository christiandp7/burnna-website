import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core'
// layouts
import MainLayout from './layouts/MainLayout'
// Pages
import Home from './pages/Home.jsx'
import Collection from './pages/Collection'
import Product from './pages/Product'
// data
import theme from './theme/theme'

SwiperCore.use([EffectFade, Navigation, Pagination])

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<MainLayout>
						<Route exact path="/collection" component={Collection} />
						<Route exact path="/product" component={Product} />
					</MainLayout>
				</Switch>
			</Router>
		</ThemeProvider>
	)
}

export default App
