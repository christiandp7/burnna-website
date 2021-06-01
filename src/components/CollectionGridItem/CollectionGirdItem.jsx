import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'

const CollectionGirdItem = ({ product }) => {
	const classes = useStyles()
	return (
		<div className={classes.grirdItemContainer}>
			<LazyLoadImage
				wrapperClassName={classes.lazyLoadWrapper}
				className={classes.image}
				src={product.img}
				alt={product.name}
				useIntersectionObserver={true}
				effect="blur"
			/>
			<div className={classes.productDetailsContainer}>
				{product.variants && (
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
				)}
				<div className={classes.productMetadata}>
					<Typography
						variant="h5"
						component="h4"
						className={classes.productTitle}>
						{product.name}
					</Typography>
					<Typography component="h4" className={classes.productPrice}>
						{product.price}
					</Typography>
				</div>
			</div>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	grirdItemContainer: {
		height: '100%',
		position: 'relative',
	},
	lazyLoadWrapper: {
		height: '100%',
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	productDetailsContainer: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: '100%',
		padding: '0 18px',
		paddingBottom: '15px',
	},
	productVariants: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		marginBottom: '20px',
	},
	productColorVariantBadge: {
		margin: '8px 0',
		width: '28px',
		height: '28px',
		border: 'solid 2px #707070',
	},
	productMetadata: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		color: theme.palette.primary.main,
	},
	productTitle: {
		textTransform: 'uppercase',
	},
	productPrice: {},
}))

export default CollectionGirdItem
