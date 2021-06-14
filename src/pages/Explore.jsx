import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import MainLayout from '../layouts/MainLayout'
// data
import { exploreItems } from '../data/explore'
import { HugeTitleExplore } from '../assets/svg/HugeTitle'

const Explore = () => {
	const classes = useStyles()
	return (
		<MainLayout>
			<div className={classes.galleryWrapper}>
				<Grid container>
					{exploreItems.map(exploreItem => (
						<Grid
							item
							xs={exploreItem.xsCol || 6}
							md={exploreItem.mdCol || 4}>
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
				<Container className={classes.titleWrapper}>
					<HugeTitleExplore />
				</Container>
			</div>
		</MainLayout>
	)
}

const useStyles = makeStyles(theme => ({
	galleryWrapper: {
		position: 'relative',
		cursor: 'default',
	},
	lazyLoadWrapper: {
		height: '100%',
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	titleWrapper: {
		position: 'absolute',
		top: '36%',
		left: '50%',
		transform: 'translateX(-50%)',
		maxWidth: '65%',
		textAlign: 'center',
		// marginTop: '18px',
		marginBottom: '12px',
		[theme.breakpoints.up('md')]: {
			maxWidth: '60%',
			// marginTop: '30px',
			marginBottom: '18px',
		},
	},
}))

export default Explore
