import React from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import productImg from '../../assets/images/product/girl-product-1.jpg'
import { makeStyles } from '@material-ui/core'
import { FiTrash2 } from 'react-icons/fi'

const CartItem = () => {
	const classes = useStyles()
	return (
		<Grid container className={classes.root}>
			<Grid item xs={3}>
				<img
					src={productImg}
					className={classes.image}
					alt="product img cart"
				/>
			</Grid>
			<Grid className={classes.detailsWrapper} item xs>
				<Typography component="h4" variant="h4" color="inherit">
					N One Piece
				</Typography>
				<Typography variant="body1" color="inherit">
					Color: White
				</Typography>
				<Typography variant="body1" color="inherit">
					Size: L
				</Typography>
			</Grid>
			<Grid item>
				<Grid container direction="column" alignItems="flex-end">
					<Grid>
						<Typography variant="h5" color="inherit">
							$150.00
						</Typography>
					</Grid>
					<Grid>
						<IconButton
							disableRipple
							aria-label="remove"
							color="inherit">
							<FiTrash2 />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		textTransform: 'uppercase',
	},
	image: {
		width: '100%',
	},
	detailsWrapper: {
		padding: `0 ${theme.spacing(3)}px`,
		'& h4': {
			fontWeight: 700,
			marginBottom: theme.spacing(1),
		},
	},
	removeButton: {},
}))

export default CartItem
