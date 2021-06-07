import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { FiX } from 'react-icons/fi'
import Heading from '../Typography/Heading'
import CartItem from './CartItem'

const CartContent = () => {
	const classes = useStyles()
	return (
		<Grid container direction="column" className={classes.root}>
			<Grid item className={classes.header}>
				<AppBar position="static" color="transparent">
					<Toolbar disableGutters>
						<IconButton
							aria-label="close"
							disableRipple
							color="inherit"
							className={classes.close}>
							<FiX />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Heading underline="none">Cart</Heading>
			</Grid>
			<Grid item xs className={classes.body}>
				<CartItem />
			</Grid>
			<Grid item className={classes.footer}>
				footer
			</Grid>
		</Grid>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		// display: 'flex',
		// flexDirection: 'column',
		height: '100%',
		padding: `${theme.spacing(4)}px ${theme.spacing(6)}px`,
		color: theme.palette.primary.contrastText,
	},
	header: {
		// paddingBottom: theme.spacing(3),
		borderBottom: `solid 2px ${theme.palette.neutral.main}`,
	},
	close: {
		padding: 0,
		fontSize: '1.6rem',
	},
	body: {
		padding: `${theme.spacing(4)}px 0`,
	},
	footer: {
		paddingTop: theme.spacing(3),
	},
}))

export default CartContent
