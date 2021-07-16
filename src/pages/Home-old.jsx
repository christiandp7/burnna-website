import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Fade from 'react-reveal/Fade'
// assets
import menImg from '../assets/images/home/men.jpg'
import womenImg from '../assets/images/home/women.jpg'
import logo from '../assets/images/isotype_white.png'

const HeroCard = ({ image, links }) => {
	const classes = useStyles()

	return (
		<Box className={classes.hero}>
			<LazyLoadImage src={image} className={classes.heroImg} />
			<Box className={classes.heroLinkContainer}>
				{links.map(linkItem => (
					<NavLink className={classes.heroLink} to={linkItem.link}>
						<Typography component="h2" variant="h3">
							{linkItem.title}
						</Typography>
					</NavLink>
				))}
			</Box>
		</Box>
	)
}

const Home = () => {
	const classes = useStyles()

	const womenLinks = [{ title: 'women', link: '/collection' }]
	const menLinks = [{ title: 'men', link: '/collection' }]

	return (
		<Box className={classes.root}>
			<Grid container className={classes.container} spacing={0}>
				<Grid className={classes.column} item xs={12} md={6}>
					<HeroCard image={menImg} links={menLinks} />
				</Grid>
				<Grid className={classes.column} item xs={12} md={6}>
					<HeroCard image={womenImg} links={womenLinks} />
				</Grid>
			</Grid>
			<Box className={classes.logoContainer}>
				<img src={logo} className={classes.logoImg} alt="logotype" />
			</Box>
		</Box>
	)
}

const useStyles = makeStyles(theme => ({
	// Home
	root: {
		position: 'relative',
	},
	container: {
		height: '100vh',
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
	},
	logoImg: {
		maxWidth: '300px',
		userSelect: 'none',
		userDrag: 'none',
	},
	// CardMenu
	hero: {
		position: 'relative',
		height: '100%',
		overflow: 'hidden',
		userSelect: 'none',
		'&:before': {
			content: "''",
			width: '100%',
			height: '100%',
			position: 'absolute',
			top: '0',
			left: '0',
			backgroundColor: '#000',
			opacity: 0,
			transition: 'all ease 0.8s',
			zIndex: 1,
		},
		'&:hover': {
			'& img': { transform: 'scale(1.08)' },
			'&:before': { opacity: 0.5 },
			'& $heroLinkContainer': {
				opacity: 1,
			},
		},
	},
	heroImg: {
		position: 'absolute',
		top: '0',
		right: '0',
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		transition: 'all ease 1.2s',
	},
	heroLinkContainer: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '100%',
		height: '100%',
		zIndex: 2,
		opacity: 0,
		transition: 'all ease 0.38s',
	},
	heroLink: {
		color: 'white',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
			textUnderlineOffset: '3px',
			textDecorationThickness: 'from-font',
		},
		'& h2': {
			fontFamily: theme.typography.h6.fontFamily,
			fontSize: theme.typography.h3.fontSize,
			fontWeight: 700,
			textTransform: 'uppercase',
		},
	},
}))

export default Home
