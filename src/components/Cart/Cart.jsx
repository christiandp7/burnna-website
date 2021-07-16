import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
// components
import CartContent from './CartContent'
import DrawerContext from '../../context/DrawerContext'

const Cart = () => {
	const classes = useStyles()

	const { cartOpen, setCartOpen } = useContext(DrawerContext)

	return (
		<Drawer
			open={cartOpen}
			onClose={() => setCartOpen(false)}
			anchor="right"
			classes={{
				paper: classes.drawerPaper,
			}}
			transitionDuration={{
				enter: 550,
				exit: 350,
			}}>
			<CartContent />
		</Drawer>
	)
}

const useStyles = makeStyles(theme => ({
	drawerPaper: {
		width: '580px',
		maxWidth: '100%',
		backgroundColor: theme.palette.primary.main,
	},
}))

export default Cart
