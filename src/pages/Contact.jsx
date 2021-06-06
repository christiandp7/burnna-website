import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
// import Grid from '@material-ui/core/Grid'

import { LazyLoadImage } from 'react-lazy-load-image-component' // import Grid from '@material-ui/core/Grid'
// components
import MainLayout from '../layouts/MainLayout'
// assets
import contactImg from '../assets/images/contact/contact-img.jpg'
import { HugeTitleAbout, HugeTitleContact } from '../assets/svg/Title'
// import HugeTitle from '../components/Typography/HugeTitle'

const Contact = () => {
	const classes = useStyles()
	return (
		<MainLayout>
			{/* <HugeTitle>Contact</HugeTitle> */}
			<HugeTitleContact />
			<Grid container>
				<Grid item xs>
					<LazyLoadImage
						className={classes.image}
						src={contactImg}
						alt="contact img"
						useIntersectionObserver={true}
						effect="blur"
					/>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</MainLayout>
	)
}

const useStyles = makeStyles(theme => ({
	image: {
		width: '100%',
	},
}))

export default Contact
