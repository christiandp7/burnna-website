import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MainLayout from '../layouts/MainLayout'
import ProductImage from '../components/Product/ProductImage'
import ProductMeta from '../components/Product/ProductMeta'
import SizeGuideSidebar from '../components/SizeGuideSidebar/SizeGuideSidebar'

const Product = () => {
	return (
		<MainLayout>
			<Container>
				<Grid container>
					<Grid item xs={0} md={2}></Grid>
					<Grid item xs={12} md={5}>
						<ProductImage />
					</Grid>
					<Grid item xs={12} md={5}>
						<ProductMeta />
					</Grid>
				</Grid>
			</Container>
			<SizeGuideSidebar />
		</MainLayout>
	)
}

export default Product
