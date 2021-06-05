import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
// assets
import Isotype from '../../assets/svg/Isotype'
// data
import sidebarNavigation from './SidebarNavigation'

const Sidebar = () => {
	const classes = useStyles()
	const preventDefault = e => e.preventDefault()

	return (
		<aside className={classes.sidebar}>
			{/* <img className={styles.logo} src={logo} alt="logo"/> */}
			<Button
				className={classes.logoLink}
				underline="none"
				onClick={preventDefault}>
				<Isotype className={classes.logo} />
			</Button>
			<div className={classes.sidebarNav}>
				{sidebarNavigation.map(navItem => (
					<Typography variant="h6">
						{/* <Link
							className={classes.sidebarLink}
							underline="none"
							href={navItem.link}
							onClick={preventDefault}>
							{navItem.label}
						</Link> */}
						<NavLink to={navItem.href} className={classes.sidebarLink}>
							{navItem.label}
						</NavLink>
					</Typography>
				))}
			</div>
		</aside>
	)
}

const useStyles = makeStyles(theme => ({
	sidebar: {
		// position: 'fixed',
		top: 0,
		left: 0,
		height: '100vh',
		width: '190px',
		background: theme.palette.primary.main,
		display: 'flex',
		flexDirection: 'column',
		padding: '35px 0',
	},
	// Logo
	logo: {
		maxWidth: '100%',
		maxHeight: '120px',
		'& path': {
			fill: theme.palette.primary.contrastText,
		},
	},
	logoLink: {
		color: theme.palette.primary.contrastText,
		padding: '10px 15px',
	},
	// Sidebar Nav
	sidebarNav: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		margin: 0,
		padding: 0,
		fontFamily: theme.typography.h6.fontFamily,
	},
	// Sidebar Links
	sidebarLink: {
		padding: '5px 8px',
		fontSize: '1.1rem',
		letterSpacing: '1px',
		color: theme.palette.primary.contrastText,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
			textDecorationThickness: '1px',
			textUnderlineOffset: '3px',
		},
	},
}))

export default Sidebar
