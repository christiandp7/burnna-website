import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// assets
import img1 from '../../assets/images/collection/swim_1.jpg'

const ProductImageDesktop = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<img className={classes.img} src={img1} alt="product" />
			<img className={classes.img} src={img1} alt="product" />
			<img className={classes.img} src={img1} alt="product" />
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		lineHeight: 0,
		'& img': {
			width: '100%',
		},
	},
}))

export default ProductImageDesktop
