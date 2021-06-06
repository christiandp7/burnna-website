import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import MainLayout from '../layouts/MainLayout'

const Explore = () => {
	return (
		<MainLayout>
			<GridList>
				<GridListTile>
					<LazyLoadImage
						// wrapperClassName={classes.lazyLoadWrapper}
						// className={classes.image}
						src={explore.img}
						alt={explore.name}
						useIntersectionObserver={true}
						effect="blur"
					/>
				</GridListTile>
			</GridList>
		</MainLayout>
	)
}

export default Explore
