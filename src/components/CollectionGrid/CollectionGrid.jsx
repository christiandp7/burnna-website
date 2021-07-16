import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Grid from '@material-ui/core/Grid'
// components
import CollectionGirdItem from '../CollectionGridItem/CollectionGirdItem'
import { NavLink } from 'react-router-dom'

const CollectionGrid = ({ products }) => {
	return (
		<Grid container>
			{products.map(product => (
				<Grid item xs={6} sm={4}>
					<CollectionGirdItem product={product} />
				</Grid>
			))}
		</Grid>
	)
}

export default CollectionGrid
