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
import {
	infoSidebarNavTop,
	infoSidebarNavBottom,
} from './FAQSidebarNav'

const InfoSidebar = () => {
	const classes = useStyles()

	return (
		<aside className={classes.sidebar}>
			<NavLink to="/" className={classes.logoLink}>
				<Isotype className={classes.logo} />
			</NavLink>
			<div className={classes.sidebarNav}>
				{infoSidebarNavTop.map(navItem => (
					<Typography variant="h6" className={classes.sidebarLinkItem}>
						<NavLink to={navItem.href} className={classes.sidebarLink}>
							{navItem.label}
						</NavLink>
					</Typography>
				))}
				<div className={classes.divider}></div>
				{infoSidebarNavBottom.map(navItem => (
					<Typography variant="h6" className={classes.sidebarLinkItem}>
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
	divider: {
		padding: `${theme.spacing(3)}px 0`,
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
		justifyContent: 'center',
		alignItems: 'center',
		margin: 0,
		padding: 0,
		fontFamily: theme.typography.h6.fontFamily,
		fontWeight: 700,
		paddingBottom: theme.spacing(3),
	},
	// Sidebar Links
	sidebarLinkItem: {
		marginBottom: theme.spacing(3),
	},
	sidebarLink: {
		padding: '5px 8px',
		// fontSize: '1.1rem',
		fontSize: theme.typography.subtitle1.fontSize,
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

export default InfoSidebar
