import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const ProductMeta = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Typography component="h2" variant="h3" className={classes.productTitle}>
				One Piece Laura
			</Typography>
			<Typography
				component="h3"
				variant="h4"
				className={classes.productSubtitle}>
				One Piece
			</Typography>
			<div className={classes.variantsContainer}>
				<Typography component="h5" variant="h5">
					Color
				</Typography>
				<Typography component="h5" variant="h5">
					Size
				</Typography>
			</div>
			<div className={classes.addToCartContainer}>
				<Button class>Add</Button>
			</div>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		textTransform: 'uppercase',
	},
	productTitle: {},
	productSubtitle: {},
	variantsContainer: {},
	addToCartContainer: {},
}))

export default ProductMeta
