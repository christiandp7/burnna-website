import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FAQSidebar from '../components/FAQSidebar/FAQSidebar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'
import { Scrollbars } from 'react-custom-scrollbars-2'

const drawerWidth = 190

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	main: props => ({
		paddingTop: props.top || '35px',
		paddingBottom: props.Bottom || '30px',
		minHeight: '50vh',
		[theme.breakpoints.down('md')]: {
			paddingTop: props.top || '18px',
			paddingBottom: props.Bottom || '12px',
		},
	}),
	scrollbars: {
		[theme.breakpoints.up('md')]: {
			marginLeft: '190px',
		},
		// flexGrow: 1,
	},
}))

const InfoLayout = ({ children, ...props }) => {
	const [sidebar, setSidebar] = useState(false)
	const [cart, setCart] = useState(false)

	const classes = useStyles(props)

	return (
		<div className={classes.root}>
			<FAQSidebar open={sidebar} setOpen={setSidebar} />
			<Cart open={cart} setOpen={setCart} />
			<Scrollbars
				style={{ height: '100vh' }}
				className={classes.scrollbars}
				autoHide
				autoHideTimeout={2000}
				autoHideDuration={300}>
				<Header
					openSidebar={setSidebar}
					openCart={setCart}
					// menu={false}
					infoLayout
				/>
				<main className={classes.main}>{children}</main>
				<Footer />
			</Scrollbars>
		</div>
	)
}

export default InfoLayout
