import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//  components
import MainLayout from '../layouts/MainLayout'
import Heading from '../components/Typography/Heading'
// assets
import aboutImg from '../assets/images/about/about-img.jpg'

const About = () => {
	const classes = useStyles()
	return (
		<MainLayout>
			<div className={classes.pageWrapper}>
				<Grid container>
					<Grid item xs={12} md={6}>
						<LazyLoadImage
							// wrapperClassName={classes.lazyLoadWrapper}
							className={classes.image}
							src={aboutImg}
							alt="About image"
							useIntersectionObserver={true}
							effect="blur"
						/>
						<div className={classes.rte}>
							<Heading>How were we created?</Heading>
							<Typography component="p" variant="body1">
								BURNNA was founded in 2021 by Antonella Camargo and
								Laura Harada. Both stem their roots in different regions
								of Latin America, one with an Andean spirit and the
								other with a Caribbean soul, this complementation became
								an essential aspect of the decision-making process when
								offering a multifaceted brand experience.
							</Typography>
							<Typography component="p" variant="body1">
								Upon meeting in university they shared a passion for
								traveling, connecting with new people and experiencing
								life from outside their comfort zone. This brewed a
								depth of appreciating different backgrounds and
								recognising the beauty in the contrasts of each.
								“Inspired by the ideas and experiences collected over
								the years, we decided to combine our love of fashion,
								art, photography, culture, and joie de vivre to create a
								platform that expresses our beliefs.”
							</Typography>
							<Typography component="p" variant="body1">
								Despite the newborn challenges sparked during and post
								the pandemic, they ceased to see an opportunity with
								buoyancy and resilience in every step of the way,
								approaching the whole process of starting a brand with
								much more perspective and resourcefulness than it
								would’ve been required in different times.
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={6}>
						<div className={classes.rteWrapper}>
							<div className={classes.rte}>
								<Heading>Who are we?</Heading>
								<Typography component="p" variant="body1">
									A brand propelled by the firm belief that great things
									come from connection. Connection to one’s self and
									between extraordinary individuals who have a life’s
									vision and act upon it.
								</Typography>
								<Typography component="p" variant="body1">
									BURNNA was created, not with the sole purpose of
									selling beach and resort-wear, but rather more with
									the intention of advocating for a lifestyle propelled
									by the leisure and exoticism that fill our native
									lands through digital narratives and actionable
									content.
								</Typography>
							</div>
						</div>

						<LazyLoadImage
							wrapperClassName={classes.lazyLoadWrapper}
							className={classes.image}
							src={aboutImg}
							alt="About image"
							useIntersectionObserver={true}
							effect="blur"
						/>
					</Grid>
				</Grid>
			</div>
		</MainLayout>
	)
}

const useStyles = makeStyles(theme => ({
	pageWrapper: {
		marginTop: '35px',
		marginBottom: '20px',
	},
	image: {
		width: '100%',
		maxWidth: '100%',
	},
	// Text
	rteWrapper: {
		[theme.breakpoints.up('md')]: {
			paddingTop: '30px',
			paddingBottom: '70px',
		},
	},
	rte: {
		padding: '40px 30px',
		'& p': {
			marginBottom: '16px',
		},
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

export default About
