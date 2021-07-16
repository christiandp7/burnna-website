import React from 'react'
import Grid from '@material-ui/core/Grid'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ProductImageMobile from '../components/Product/ProductImageMobile'
import ProductImageDesktop from '../components/Product/ProductImageDesktop'
import ProductMeta from '../components/Product/ProductMeta'
import SizeGuideSidebar from '../components/SizeGuideSidebar/SizeGuideSidebar'
import MainLayout from '../layouts/MainLayout'

const Product = () => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	return (
		<MainLayout>
			<Grid container>
				<Grid item xs={12} md={6}>
					{isDesktop ? <ProductImageDesktop /> : <ProductImageMobile />}
				</Grid>
				<Grid item xs={12} md={6}>
					<ProductMeta />
				</Grid>
			</Grid>
		</MainLayout>
	)
}

export default Product
