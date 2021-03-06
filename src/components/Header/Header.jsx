import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import { FiMenu } from 'react-icons/fi'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
// components
import DrawerContext from '../../context/DrawerContext'
// assets
import LogoText from '../../assets/svg/LogoText'
import Button from '@material-ui/core/Button'

const Header = ({ openSidebar, infoLayout = false, ...props }) => {
	const classes = useStyles(props)
	const { setCartOpen } = useContext(DrawerContext)

	return (
		<AppBar className={classes.appBar} color="white" position="static">
			<Container>
				<div className={classes.menuButtonContainer}></div>
				<Toolbar
					className={classes.toolbar}
					component="ul"
					disableGutters={true}>
					{infoLayout ? (
						<Hidden mdUp>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={() => openSidebar(true)}>
								<FiMenu />
							</IconButton>
						</Hidden>
					) : (
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
							onClick={() => openSidebar(true)}>
							<FiMenu />
						</IconButton>
					)}
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
					<NavLink to="/" className={classes.logoLink}>
						<LogoText className={classes.logo} />
					</NavLink>
					<li>
						<Link className={classes.link} underline="none" href="#">
							Campaign 21
						</Link>
					</li>
					<li>
						<Link className={classes.link} underline="none" href="#">
							Espa??ol
						</Link>
					</li>
					<li>
						<Button
							className={`${classes.link} ${classes.buttonLink}`}
							variant="text"
							disableRipple={true}
							// underline="none"
							// href="#"
							onClick={() => setCartOpen(true)}>
							Cart
						</Button>
					</li>
					<Hidden mdUp>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
							onClick={() => openSidebar(true)}>
							<FiMenu />
						</IconButton>
					</Hidden>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

const useStyles = makeStyles(theme => ({
	// AppBar
	appBar: {
		fontFamily: theme.typography.h6.fontFamily,
		textTransform: 'uppercase',
		boxShadow: 'none',
	},
	// Menu Button
	menuButtonContainer: {},
	// Toolbar
	toolbar: {
		position: 'relative',
		justifyContent: 'space-between',
		listStyle: 'none',
		padding: 0,
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
		'& > li': {
			// marginBottom: '35px',
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
		},
	},
	// Links
	link: {
		fontFamily: theme.typography.h6.fontFamily,
		fontWeight: 700,
		fontSize: theme.typography.subtitle1.fontSize,
		color: theme.palette.primary.main,
		padding: '5px 8px',
		'&:hover': {
			textDecoration: 'underline',
			textDecorationThickness: 'auto',
			textUnderlineOffset: '2px',
			background: 'transparent',
		},
		'& > span:not(.MuiButton-label)': {
			fontWeight: 400,
			// fontFamily: '"Proxima Nova Condensed"',
			letterSpacing: '0.5px',
		},
	},
	// Logo
	logoLink: {
		lineHeight: 'initial',
	},
	logo: {
		maxWidth: 180,
		margin: '0 25px',
		[theme.breakpoints.down('sm')]: {
			maxWidth: 120,
		},
	},
	// menuButton
	menuButton: {
		[theme.breakpoints.down('sm')]: {
			position: 'absolute',
			left: theme.spacing(1),
		},
	},
}))

export default Header
