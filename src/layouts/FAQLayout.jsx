import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FAQSidebar from '../components/FAQSidebar/FAQSidebar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'
import { Scrollbars } from 'react-custom-scrollbars-2'

const drawerWidth = 190

const InfoLayout = ({ children, ...props }) => {
	const [sidebar, setSidebar] = useState(false)
	const [cart, setCart] = useState(false)

	const classes = useStyles(props)

	return (
		<div className={classes.root}>
			<FAQSidebar open={sidebar} setOpen={setSidebar} />
			<Cart open={cart} setOpen={setCart} />
			{/* <Scrollbars
				style={{ height: '100vh' }}
				className={classes.scrollbars}
				autoHide
				autoHideTimeout={2000}
				autoHideDuration={300}> */}
			<Header
				openSidebar={setSidebar}
				openCart={setCart}
				// menu={false}
				infoLayout
			/>
			<main className={classes.main}>{children}</main>
			<Footer />
			{/* </Scrollbars> */}
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	main: props => ({
		paddingTop: props.top || '65px',
		paddingBottom: props.Bottom || '30px',
		minHeight: '70vh',
		display: props.alignItemsCenter ? 'flex' : 'block',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: props => ({
			paddingTop: props.mobTop || 0,
			paddingBottom: props.Bottom || '12px',
		}),
	}),
	scrollbars: {
		[theme.breakpoints.up('md')]: {
			marginLeft: '190px',
		},
		// flexGrow: 1,
	},
}))

export default InfoLayout
