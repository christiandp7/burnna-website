import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Fade from 'react-reveal/Fade'
// assets
import menImg from '../../assets/images/home/men.jpg'
import womenImg from '../../assets/images/home/women.jpg'
import logo from '../../assets/images/isotype_white.png'
import styles from './Home.module.scss'

const CardMenu = ({ image, links }) => {
	const classes = useStyles()
	const [showLinks, setShowLinks] = useState(false)

	const handleMouseEnter = () => {
		setShowLinks(true)
	}
	const handleMouseLeave = () => {
		setShowLinks(false)
	}
	return (
		<Box
			className={styles.hero}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<LazyLoadImage src={image} className={styles.heroImg} />
			<Box className={`${classes.menuContainer} ${styles.menuContainer}`}>
				{showLinks &&
					links.map(linkItem => (
						<NavLink className={classes.linkCollection} to={linkItem.link}>
							{linkItem.title}
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
					<CardMenu image={menImg} links={menLinks} />
				</Grid>
				<Grid className={classes.column} item xs={12} md={6}>
					<CardMenu image={womenImg} links={womenLinks} />
				</Grid>
			</Grid>
			<Box className={classes.logoContainer}>
				<NavLink to="/">
					<img src={logo} className={classes.logoImg} alt="logotype" />
				</NavLink>
			</Box>
		</Box>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
	},
	container: {
		height: '100vh',
	},
	column: {
		height: '100%',
	},
	// CardMenu
	menuContainer: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '100%',
		height: '100%',
		zIndex: 2,
		// opacity: 0,
		transition: 'all ease 0.5s',
	},
	linkCollection: {
		// padding: '5px 8px',
		color: 'white',
		fontFamily: theme.typography.h6.fontFamily,
		fontSize: theme.typography.h4.fontSize,
		textDecoration: 'none',
		textTransform: 'uppercase',
		'&:hover': {
			textDecoration: 'underline',
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
	},
}))

export default Home
