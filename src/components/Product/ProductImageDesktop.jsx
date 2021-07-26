import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// components
import LogoText from '../../assets/svg/LogoText'
// assets
import img1 from '../../assets/images/collection/swim_1.jpg'

const ProductImageDesktop = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className={classes.logoContainer}>
				<LogoText className={classes.logo} />
			</div>
			<img className={classes.img} src={img1} alt="product" />
			<img className={classes.img} src={img1} alt="product" />
			<img className={classes.img} src={img1} alt="product" />
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		lineHeight: 0,
		'& img': {
			width: '100%',
		},
	},
	logoContainer: {
		position: 'absolute',
		width: '100%',
		top: 0,
		textAlign: 'center',
		paddingTop: theme.spacing(4),
		zIndex: 1,
		[theme.breakpoints.down('md')]: {
			paddingTop: theme.spacing(2),
		},
	},
	logo: {
		width: '200px',
	},
}))

export default ProductImageDesktop
