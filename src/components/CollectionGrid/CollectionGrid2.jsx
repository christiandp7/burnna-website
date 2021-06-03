import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CollectionGrid = ({ products }) => {
	const classes = useStyles()
	return (
		<div className={classes.gridContainer}>
			<GridList
				className={classes.gridList}
				cellHeight="auto"
				spacing={0}
				cols={3}>
				{products.map(product => (
					<GridListTile key={product.img}>
						<LazyLoadImage
							className={classes.image}
							src={product.img}
							alt={product.name}
							useIntersectionObserver={true}
							effect="blur"
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	gridContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
	},
	gridList: {
		margin: '0 !important',
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
}))

export default CollectionGrid
