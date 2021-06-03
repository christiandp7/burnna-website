import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Swiper, SwiperSlide } from 'swiper/react'
// images
import img1 from '../../assets/images/product/girl-product-1.jpg'
import img2 from '../../assets/images/product/girl-product-2.jpg'

const ProductImage = () => {
	const classes = useStyles()
	return (
		<Swiper
			loop={true}
			spaceBetween={30}
			slidesPerView={1}
			navigation={true}
			effect="fade"
			pagination={{
				clickable: true,
			}}
			className={classes.swiper}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={swiper => console.log(swiper)}
		>
			<SwiperSlide className={classes.swiperSlide}>
				<img className={classes.swiperImg} src={img1} alt="product" />
			</SwiperSlide>
			<SwiperSlide className={classes.swiperSlide}>
				<img className={classes.swiperImg} src={img2} alt="product" />
			</SwiperSlide>
		</Swiper>
	)
}

const useStyles = makeStyles(theme => ({
	swiper: {
		width: '100%',
		height: '685px',
		maxWidth: '100%',
		paddingBottom: '35px',
		'& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
			background: theme.palette.primary.main,
		},
		'& .swiper-button-prev, & .swiper-button-next': {
			color: theme.palette.primary.main,
		},
	},
	swiperSlide: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	swiperImg: {
		height: '100%',
		maxHeight: '100%',
	},
}))

export default ProductImage
