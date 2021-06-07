import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
// import Grid from '@material-ui/core/Grid'

import { LazyLoadImage } from 'react-lazy-load-image-component' // import Grid from '@material-ui/core/Grid'
// components
import MainLayout from '../layouts/MainLayout'
import Heading from '../components/Typography/Heading'
// assets
import contactImg from '../assets/images/contact/contact-img.jpg'
import { HugeTitleAbout, HugeTitleContact } from '../assets/svg/HugeTitle'
// import HugeTitle from '../components/Typography/HugeTitle'

const Contact = () => {
	const classes = useStyles()
	return (
		<MainLayout>
			{/* <HugeTitle>Contact</HugeTitle> */}
			<Container className={classes.titleWrapper}>
				<HugeTitleContact />
			</Container>
			<Grid container>
				<Grid item xs={12} md={6}>
					<LazyLoadImage
						className={classes.image}
						src={contactImg}
						alt="contact img"
						useIntersectionObserver={true}
						effect="blur"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<div className={classes.rteWrapper}>
						<div className={classes.rte}>
							<Heading>CUSTOMER SERVICE:</Heading>
							<Typography component="p" variant="body1">
								Monday to Friday: 9am to 6pm
							</Typography>
							<Typography component="p" variant="body1">
								<b>Whatsapp:</b>
							</Typography>
							<Typography component="p" variant="body1">
								+57 34700000 - Colombia & Ecuador
								<br />
								+31 0000000 - Republica Domenicana
							</Typography>
							<Typography component="p" variant="body1">
								<b>General:</b>{' '}
								<Link href="mailto:hello@burnna.com" color="inherit">
									hello@burnna.com
								</Link>
								<br />
								<b>Sales & customer service:</b>{' '}
								<Link href="mailto:contact@burnna.com" color="inherit">
									contact@burnna.com
								</Link>
								<br />
								<b>Press:</b>{' '}
								<Link href="mailto:press@burnna.com" color="inherit">
									press@burnna.com
								</Link>
							</Typography>
							<br />
							<Heading>CONNECT</Heading>
							<Typography component="p" variant="body1">
								<b>Instagram:</b>{' '}
								<Link
									href="https://instagram.com/burnna___"
									target="_blank"
									rel="noopener"
									color="inherit">
									@burnna___
								</Link>
							</Typography>
							<Typography component="p" variant="body1">
								<b>TikTok:</b>{' '}
								<Link
									href="https://tiktok.com/burnna"
									target="_blank"
									rel="noopener"
									color="inherit">
									@burnna
								</Link>
							</Typography>
						</div>
					</div>
				</Grid>
			</Grid>
		</MainLayout>
	)
}

const useStyles = makeStyles(theme => ({
	titleWrapper: {
		maxWidth: '65%',
		textAlign: 'center',
		marginTop: '18px',
		marginBottom: '12px',
		[theme.breakpoints.up('md')]: {
			maxWidth: '50%',
			marginTop: '30px',
			marginBottom: '20px',
		},
	},
	image: {
		width: '100%',
	},
	rteWrapper: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		justifyContent: 'center',
	},
	rte: {
		padding: '40px 30px',
		'& p': {
			marginBottom: '16px',
		},
		// [theme.breakpoints.down('md')]: {},
	},
	title: {
		textTransform: 'uppercase',
		fontWeight: '700',
		fontFamily: theme.typography.h6.fontFamily,
		textDecoration: 'underline',
		textUnderlineOffset: '4px',
		marginBottom: '30px',
	},
}))

export default Contact
