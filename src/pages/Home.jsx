import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import HomeLayout from '../layouts/HomeLayout'
// assets
import menImg from '../assets/images/home/men.jpg'
import womenImg from '../assets/images/home/women.jpg'
import LogoText from '../assets/svg/LogoText'

const HeroCard = ({ image, links }) => {
	const classes = useStyles()

	return (
		<Box className={classes.hero}>
			<LazyLoadImage src={image} className={classes.heroImg} />
			<Box className={classes.heroLinkContainer}>
				{links.map(linkItem => (
					<Link className={classes.heroLink} to={linkItem.link}>
						<Typography component="h2" variant="h6">
							{linkItem.title}
						</Typography>
					</Link>
				))}
			</Box>
		</Box>
	)
}

const Home = () => {
	const classes = useStyles()

	const womenLinks = [{ title: 'shop women', link: '/collection' }]
	const menLinks = [{ title: 'shop men', link: '/collection' }]

	return (
		<HomeLayout>
			<Box className={classes.heroContainer}>
				<Grid container className={classes.container} spacing={0}>
					<Grid className={classes.column} item xs={12} md={6}>
						<HeroCard image={menImg} links={menLinks} />
					</Grid>
					<Grid className={classes.column} item xs={12} md={6}>
						<HeroCard image={womenImg} links={womenLinks} />
					</Grid>
				</Grid>
				<Box className={classes.logoContainer}>
					<LogoText className={classes.logoImg} />
				</Box>
			</Box>
		</HomeLayout>
	)
}

const useStyles = makeStyles(theme => ({
	// Hero
	heroContainer: {
		position: 'relative',
	},
	container: {
		height: 'calc(100vh - 55px)',
	},
	column: {
		height: '100%',
		[theme.breakpoints.down('sm')]: {
			height: '50%',
		},
	},
	// Logo
	logoContainer: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translateX(-50%) translateY(-50%)',
		zIndex: 2,
		width: '40%',
	},
	logoImg: {
		userSelect: 'none',
		userDrag: 'none',
		'& path': {
			fill: theme.palette.primary.contrastText,
		},
	},
	// CardMenu
	hero: {
		position: 'relative',
		height: '100%',
		userSelect: 'none',
		userDrag: 'none',
	},
	heroImg: {
		position: 'absolute',
		top: '0',
		right: '0',
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	heroLinkContainer: {
		position: 'absolute',
		padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
	},
	heroLink: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
			textUnderlineOffset: '1px',
			textDecorationThickness: 'from-font',
		},
		'& h2': {
			fontWeight: 700,
			textTransform: 'uppercase',
		},
	},
}))

export default Home
