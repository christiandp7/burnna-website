import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
// images
import img1 from '../../assets/images/collection/swim_1.jpg'
import img2 from '../../assets/images/collection/swim_2.jpg'
import img3 from '../../assets/images/collection/swim_3.jpg'
import Fade from '@material-ui/core/Fade'

const ProductImageMobile = () => {
	const classes = useStyles()
	return (
		<Swiper
			loop={true}
			spaceBetween={0}
			slidesPerView={1}
			navigation={{
				hideOnClick: true,
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}}
			autoplay={true}
			// effect="fade"
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
			<SwiperSlide className={classes.swiperSlide}>
				<img className={classes.swiperImg} src={img3} alt="product" />
			</SwiperSlide>

			<BsChevronLeft className="swiper-button-prev" />
			<BsChevronRight className="swiper-button-next" />
		</Swiper>
	)
}

const useStyles = makeStyles(theme => ({
	// swiper: {
	// 	width: '100%',
	// 	height: '685px',
	// 	maxWidth: '100%',
	// 	paddingBottom: '35px',
	// 	'& .swiper-pagination': {
	// 		opacity: 0,
	// 		transition: 'opacity ease 350ms',
	// 	},
	// 	'& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
	// 		background: theme.palette.neutral.main,
	// 	},
	// 	'& .swiper-button-prev, & .swiper-button-next': {
	// 		color: theme.palette.neutral.light,
	// 		width: '40px',
	// 		height: 'auto',
	// 		opacity: 0,
	// 		transition: 'opacity ease 350ms',
	// 		'&:hover': {
	// 			color: theme.palette.neutral.main,
	// 		},
	// 	},
	// 	'&:hover': {
	// 		'& .swiper-button-prev, & .swiper-button-next, & .swiper-pagination':
	// 			{
	// 				opacity: 1,
	// 			},
	// 	},
	// },
	// swiperSlide: {
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// },
	// swiperImg: {
	// 	height: '100%',
	// 	maxHeight: '100%',
	// },
	swiper: {
		'& .swiper-pagination': {
			opacity: 0,
			transition: 'opacity ease 350ms',
		},
		'& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
			background: theme.palette.neutral.main,
		},
		'& .swiper-button-prev, & .swiper-button-next': {
			color: theme.palette.neutral.light,
			width: '40px',
			height: 'auto',
			opacity: 0,
			transition: 'opacity ease 350ms',
			'&:hover': {
				color: theme.palette.neutral.main,
			},
		},
		'&:hover': {
			'& .swiper-button-prev, & .swiper-button-next, & .swiper-pagination':
				{
					opacity: 1,
				},
		},
	},
	swiperImg: {
		width: '100%',
	},
}))

export default ProductImageMobile
