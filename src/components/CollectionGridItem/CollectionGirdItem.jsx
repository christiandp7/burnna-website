import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'
import Fade from 'react-reveal/Fade'
import Grow from '@material-ui/core/Grow'

const CollectionGirdItem = ({ product }) => {
	const [showDetails, setShowDetails] = useState(false)

	const handleMouseEnter = () => {
		setShowDetails(true)
	}
	const handleMouseLeave = () => {
		setShowDetails(false)
	}

	const classes = useStyles()
	return (
		<div
			className={classes.grirdItemContainer}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div className={classes.productImageRow}>
				<NavLink to="/product">
					<LazyLoadImage
						wrapperClassName={classes.lazyLoadWrapper}
						className={classes.image}
						src={product.img}
						alt={product.name}
						useIntersectionObserver={true}
						effect="blur"
					/>
				</NavLink>
				<div className={classes.productVariantsContainer}>
					{product.variants && (
						<Grow timeout={{ enter: 500, exit: 500 }} in={showDetails}>
							<div className={classes.productVariants}>
								{product.variants.color &&
									product.variants.color.map(color => (
										<Tooltip title={color.name} placement="right">
											<Box
												className={classes.productColorVariantBadge}
												bgcolor={color.hex}
											/>
										</Tooltip>
									))}
							</div>
						</Grow>
					)}
				</div>
			</div>

			<div className={classes.productCaptionRow}>
				<NavLink to="/product">
					<Typography
						variant="h6"
						component="h4"
						className={classes.productTitle}>
						{product.name}
					</Typography>
				</NavLink>
				<Typography
					variant="h6"
					component="h4"
					className={classes.productPrice}>
					{product.price}
				</Typography>
			</div>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	grirdItemContainer: {
		height: '100%',
		position: 'relative',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		// '&:hover img': {
		// 	transform: 'scale(1.05)',
		// },
		// '&:after': {
		// 	content: '""',
		// 	position: 'absolute',
		// 	width: '100%',
		// 	height: '100%',
		// 	top: 0,
		// 	left: 0,
		// 	backgroundColor: theme.palette.primary.main,
		// 	opacity: 0,
		// 	transition: `opacity ${theme.transitions.easing.easeIn} 400ms`,
		// 	transform: 'scale(1.1)',
		// },
		// '&:hover': {
		// 	'&:after': {
		// 		opacity: 0.25,
		// 	},
		// },
	},
	productImageRow: {
		position: 'relative',
		height: '100%',
	},
	lazyLoadWrapper: {
		height: '100%',
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		transition: `all ease-out 800ms !important`,
	},
	productVariantsContainer: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: '100%',
		padding: '0 18px',
		paddingBottom: '15px',
		zIndex: 1,
	},
	productVariants: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		marginBottom: '20px',
		width: '100%',
	},
	productColorVariantBadge: {
		margin: '8px 0',
		width: '28px',
		height: '28px',
		border: 'solid 2px #707070',
		transition: `transform ${theme.transitions.easing.easeIn} 150ms`,
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},

	productCaptionRow: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
		color: theme.palette.primary.main,
		[theme.breakpoints.down('md')]: {
			padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
		},
		'& a': {
			textDecoration: 'none',
		},
		'& a:hover': {
			textDecoration: 'underline',
		},
	},
	productTitle: {
		textTransform: 'uppercase',
		color: theme.palette.primary.main,
		fontWeight: 700,
	},
	productPrice: {
		cursor: 'default',
		fontWeight: 700,
	},
}))

export default CollectionGirdItem
