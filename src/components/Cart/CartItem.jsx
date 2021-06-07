import React from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import { FiTrash2 } from 'react-icons/fi'
// components
import QuantitySelector from '../Button/QuantitySelector'
// assets
import productImg from '../../assets/images/product/girl-product-1.jpg'

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
			<Grid
				container
				direction="column"
				className={classes.detailsWrapper}
				item
				xs>
				<Grid item>
					<Typography component="h4" variant="h4" color="inherit">
						N One Piece
					</Typography>
				</Grid>
				<Grid item xs>
					<Typography variant="body1" color="inherit">
						Color: White
					</Typography>
					<Typography variant="body1" color="inherit">
						Size: L
					</Typography>
				</Grid>
				<Grid item>
					<QuantitySelector />
				</Grid>
			</Grid>
			<Grid item>
				<Grid
					container
					direction="column"
					className={classes.priceWrapper}
					alignItems="flex-end"
					justify="space-between">
					<Grid item>
						<Typography variant="h5" color="inherit">
							$150.00
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							disableRipple
							size="small"
							edge="end "
							aria-label="remove"
							color="secondary">
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
		paddingBottom: theme.spacing(2),
		'& h4': {
			fontWeight: 700,
			marginBottom: theme.spacing(1),
		},
	},
	priceWrapper: {
		height: '100%',
		paddingBottom: theme.spacing(2),
	},
}))

export default CartItem
