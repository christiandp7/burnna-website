import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import SwiperCore, {
	EffectFade,
	Navigation,
	Pagination,
} from 'swiper/core'
// layouts
import MainLayout from './layouts/MainLayout'
// Pages
import Home from './pages/Home.jsx'
import Collection from './pages/Collection'
import Product from './pages/Product'
import About from './pages/About'
import Explore from './pages/Explore'
import Contact from './pages/Contact'
import ReturnPolicy from './pages/FAQ/ReturnPolicy'
import ShippingPolicy from './pages/FAQ/ShippingPolicy'
import ProductCare from './pages/FAQ/ProductCare'
import Payment from './pages/FAQ/Payment'
import SizeGuide from './pages/FAQ/SizeGuide'
import NotFound from './pages/NotFound'
// data
import theme from './theme/theme'

SwiperCore.use([EffectFade, Navigation, Pagination])

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/collection" component={Collection} />
					<Route exact path="/product" component={Product} />
					<Route exact path="/about" component={About} />
					<Route exact path="/explore" component={Explore} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/return-policy" component={ReturnPolicy} />
					<Route
						exact
						path="/shipping-policy"
						component={ShippingPolicy}
					/>
					<Route exact path="/product-care" component={ProductCare} />
					<Route exact path="/payment" component={Payment} />
					<Route exact path="/size-guide" component={SizeGuide} />
					{/* <Route exact path="/faq" component={FAQ} /> */}
					<Route exact path="/404" component={NotFound} />
					<Redirect from="*" to="/404" />
				</Switch>
			</Router>
		</ThemeProvider>
	)
}

export default App
