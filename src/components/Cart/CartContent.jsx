import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Heading from '../Typography/Heading'
import CartItem from './CartItem'
import Button from '@material-ui/core/Button'
import { FiX } from 'react-icons/fi'
import { Scrollbars } from 'react-custom-scrollbars-2'

const CartContent = () => {
	const classes = useStyles()
	return (
		<Grid
			container
			wrap="nowrap"
			direction="column"
			className={classes.root}>
			<Grid item className={classes.header}>
				<AppBar elevation={0} position="static" color="transparent">
					<Toolbar disableGutters variant="dense">
						<IconButton
							aria-label="close"
							disableRipple
							color="secondary"
							edge="start">
							<FiX />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Heading underline="none" mb={2} align="center">
					Cart
				</Heading>
			</Grid>
			<Grid item xs className={classes.body}>
				<Scrollbars
					style={{ height: '100%' }}
					autoHide
					autoHideTimeout={2000}
					autoHideDuration={300}>
					<CartItem />
				</Scrollbars>
			</Grid>
			<Grid item className={classes.footer}>
				<div className={classes.total}>
					<Typography variant="h5" color="inherit">
						Total
					</Typography>
					<Typography variant="h5" color="inherit">
						US $150.00
					</Typography>
				</div>
				<Button
					variant="contained"
					size="large"
					fullWidth
					className={classes.checkoutButton}
					color="secondary">
					Check Out
				</Button>
			</Grid>
		</Grid>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		padding: `${theme.spacing(3)}px ${theme.spacing(5)}px`,
		color: theme.palette.primary.contrastText,
		textTransform: 'uppercase',
		cursor: 'default',
	},
	header: {
		// paddingBottom: theme.spacing(3),
		borderBottom: `solid 2px ${theme.palette.neutral.main}`,
	},
	body: {
		paddingTop: theme.spacing(3),
	},
	footer: {
		paddingTop: theme.spacing(3),
	},
	total: {
		borderTop: `solid 2px ${theme.palette.neutral.main}`,
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: `${theme.spacing(1) + 2}px`,
		paddingBottom: theme.spacing(3),
	},
	checkoutButton: {
		fontSize: '1.15rem',
		fontWeight: 600,
		paddingTop: '10px',
		paddingBottom: '10px',
	},
}))

export default CartContent
