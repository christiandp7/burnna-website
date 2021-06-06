import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import MainLayout from '../layouts/MainLayout'
// data
import { exploreItems } from '../data/explore'

const Explore = () => {
	const classes = useStyles()
	return (
		<MainLayout>
			<Grid container>
				{exploreItems.map(exploreItem => (
					<Grid item xs sm={exploreItem.cols || 4}>
						<LazyLoadImage
							wrapperClassName={classes.lazyLoadWrapper}
							className={classes.image}
							src={exploreItem.img}
							alt={exploreItem.alt}
							useIntersectionObserver={true}
							effect="blur"
						/>
					</Grid>
				))}
			</Grid>
		</MainLayout>
	)
}

const useStyles = makeStyles(theme => ({
	lazyLoadWrapper: {
		height: '100%',
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
}))

export default Explore
