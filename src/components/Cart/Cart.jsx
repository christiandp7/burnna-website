import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
// components
import CartContent from './CartContent'

const Cart = ({ open, setOpen }) => {
	const classes = useStyles()

	return (
		<Drawer
			open={open}
			onClose={() => setOpen(false)}
			anchor="right"
			classes={{
				paper: classes.drawerPaper,
			}}
			transitionDuration={{
				enter: 600,
				exit: 350,
			}}>
			<CartContent />
		</Drawer>
	)
}

const useStyles = makeStyles(theme => ({
	drawerPaper: {
		width: '550px',
		maxWidth: '100%',
		backgroundColor: theme.palette.primary.main,
	},
}))

export default Cart
