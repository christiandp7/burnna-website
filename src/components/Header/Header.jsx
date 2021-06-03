import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { FiMenu } from 'react-icons/fi'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
// assets
// import logo from '../../assets/images/isotype_black.png'
import LogoText from '../../assets/svg/LogoText'

const Header = ({ setSidebar }) => {
	const classes = useStyles()
	return (
		<AppBar className={classes.appBar} color="white" position="static">
			<Container>
				<div className={classes.menuButtonContainer}></div>
				<Toolbar
					className={classes.toolbar}
					component="ul"
					disableGutters={true}>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={() => setSidebar(true)}>
						<FiMenu />
					</IconButton>
					<li>
						<Link className={classes.link} underline="none" href="#">
							Women <span>- SWIMWEAR</span>
						</Link>
					</li>
					<li>
						<Link className={classes.link} underline="none" href="#">
							Men
						</Link>
					</li>
					{/* <li>
						<Link className={classes.link} underline="none" href="#">
							Explore
						</Link>
					</li> */}
					<NavLink to="/">
						<LogoText className={classes.logo} />
					</NavLink>
					<li>
						<Link className={classes.link} underline="none" href="#">
							Campaign 21
						</Link>
					</li>
					<li>
						<Link className={classes.link} underline="none" href="#">
							Español
						</Link>
					</li>
					<li>
						<Link className={classes.link} underline="none" href="#">
							Cart
						</Link>
					</li>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

const useStyles = makeStyles(theme => ({
	// AppBar
	appBar: {
		fontFamily: '"Jules Text"',
		textTransform: 'uppercase',
		boxShadow: 'none',
	},
	// Menu Button
	menuButtonContainer: {},
	menuButton: {},
	// Toolbar
	toolbar: {
		justifyContent: 'space-between',
		listStyle: 'none',
		padding: 0,
		'& > li': {
			// marginBottom: '35px',
		},
	},
	// Links
	link: {
		fontFamily: '"Jules Text"',
		fontWeight: 700,
		fontSize: theme.typography.subtitle1.fontSize,
		color: theme.palette.primary.main,
		padding: '5px 8px',
		'& > span': {
			fontWeight: 400,
			fontFamily: '"Proxima Nova Condensed"',
			letterSpacing: '0.5px',
		},
	},
	// Logo
	logo: {
		maxWidth: 180,
		margin: '0 25px',
	},
}))

export default Header
