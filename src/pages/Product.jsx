import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ProductImage from '../components/Product/ProductImage'
import ProductMeta from '../components/Product/ProductMeta'

const Product = () => {
	return (
		<Container>
			<Grid container>
				<Grid item xs={0} md={2}></Grid>
				<Grid item xs={12} md={5}>
					<div>
						<ProductImage />
					</div>
				</Grid>
				<Grid item xs={12} md={5}>
					<ProductMeta />
				</Grid>
			</Grid>
		</Container>
	)
}

export default Product
