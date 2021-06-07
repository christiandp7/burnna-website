import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
// components
// import SidebarContent from './SidebarContent'

const Cart = ({ open, setOpen }) => {
	const classes = useStyles()

	return (
		<Drawer
			open={open}
			onClose={() => setOpen(false)}
			classes={{
				paper: classes.drawerPaper,
			}}>
			CART
			{/* <SidebarContent /> */}
		</Drawer>
	)
}

const useStyles = makeStyles(theme => ({
	drawerPaper: {
		// width: '100%',
		// backgroundColor:
	},
}))

export default Cart
