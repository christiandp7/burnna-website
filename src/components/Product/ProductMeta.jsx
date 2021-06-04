import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// components
import AddToCartButton from '../Button/AddToCartButton'
import ColorSelectorButtonGroup from '../Button/ColorSelectorButtonGroup'
import CustomAccordion from '../Accordion/CustomAccordion'
import SizeSelectorButtonGroup from '../Button/SizeSelectorButtonGroup'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import LinkButton from '../Button/LinkButton'

const ProductMeta = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className={classes.productHeading}>
				<Typography
					component="h2"
					variant="h3"
					className={classes.productTitle}>
					One Piece Laura
				</Typography>
				<Typography
					component="h3"
					variant="h4"
					className={classes.productSubtitle}>
					One Piece
				</Typography>
			</div>
			<div className={classes.variantsContainer}>
				<div className={classes.variant}>
					<Typography component="h5" variant="h5">
						Color
					</Typography>
					<ColorSelectorButtonGroup />
				</div>
				<div className={classes.variant}>
					<Typography component="h5" variant="h5">
						Size
					</Typography>
					<Grid container justify="space-between">
						<Grid item>
							<SizeSelectorButtonGroup />
						</Grid>
						<Grid item style={{ display: 'flex' }} alignItems="center">
							<LinkButton>Size guide</LinkButton>
						</Grid>
					</Grid>
				</div>
			</div>
			<div className={classes.addToCartContainer}>
				<AddToCartButton>
					<Typography variant="h5">Add</Typography>
				</AddToCartButton>
			</div>
			<div className={classes.accordionContainer}>
				<CustomAccordion />
			</div>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		padding: '30px 18px',
		textTransform: 'uppercase',
	},
	productHeading: {
		paddingBottom: '30px',
		cursor: 'default',
	},
	productTitle: {
		marginBottom: '12px',
	},
	productSubtitle: {},
	variantsContainer: {
		'& h5': {
			cursor: 'default',
		},
	},
	variant: {
		padding: '15px 0',
	},
	addToCartContainer: {
		padding: '15px 0',
	},
	accordionContainer: {
		padding: '15px 0',
	},
}))

export default ProductMeta
