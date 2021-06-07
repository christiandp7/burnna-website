import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'
import { Scrollbars } from 'react-custom-scrollbars-2'

const useStyles = makeStyles({
	main: props => ({
		paddingTop: props.top || '35px',
		paddingBottom: props.Bottom || '30px',
	}),
})

const MainLayout = ({ children, ...props }) => {
	const [sidebar, setSidebar] = useState(false)
	const [cart, setCart] = useState(false)

	const classes = useStyles(props)

	return (
		<>
			<Sidebar open={sidebar} setOpen={setSidebar} />
			<Cart open={cart} setOpen={setCart} />
			<Scrollbars
				style={{ height: '100vh' }}
				autoHide
				autoHideTimeout={2000}
				autoHideDuration={300}>
				<Header openSidebar={setSidebar} openCart={setCart} />
				<main className={classes.main}>{children}</main>
				<Footer />
			</Scrollbars>
		</>
	)
}

export default MainLayout
