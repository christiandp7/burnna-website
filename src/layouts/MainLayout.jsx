import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'

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
			<Header openSidebar={setSidebar} openCart={setCart} />
			<main className={classes.main}>{children}</main>
			<Footer />
		</>
	)
}

export default MainLayout
