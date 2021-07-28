import React, { useContext } from 'react'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
// components
import DrawerContext from '../../context/DrawerContext'
// assets
import LogoText from '../../assets/svg/LogoText'
import Burguer from '../../assets/svg/Burguer'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const Header = ({ openSidebar, infoLayout = false, ...props }) => {
	const classes = useStyles(props)
	const { setCartOpen } = useContext(DrawerContext)

	return (
		<div className={classes.appBarWrapper}>
			<AppBar className={classes.appBar} position="fixed">
				<Container>
					<div className={classes.menuButtonContainer}></div>
					<Toolbar
						className={classes.toolbar}
						// component="ul"
						disableGutters={true}>
						{infoLayout ? (
							<Hidden mdUp>
								<IconButton
									edge="start"
									className={classes.menuButton}
									color="inherit"
									aria-label="menu"
									onClick={() => openSidebar(true)}>
									<Burguer />
								</IconButton>
							</Hidden>
						) : (
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={() => openSidebar(true)}>
								<Burguer />
							</IconButton>
						)}
						<Hidden lgUp>
							<Link to="/" className={classes.logoLink}>
								<LogoText className={classes.logo} />
							</Link>
						</Hidden>
						<Grid container spacing={0} className={classes.desktopNav}>
							<Grid item container xs>
								<ul
									className={`${classes.linklist} ${classes.linklistLeft}`}>
									<li>
										<NavLink
											to="/collection?women"
											className={classes.link}>
											Women
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/collection?men"
											className={classes.link}>
											Men
										</NavLink>
									</li>
									<li>
										<Link
											className={classes.link}
											underline="none"
											href="#">
											Our World
										</Link>
									</li>
								</ul>
							</Grid>
							<Grid item container xs justify="flex-end">
								<ul className={classes.linklist}>
									<li>
										<Link
											className={classes.link}
											underline="none"
											href="#">
											Español
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
								</ul>
							</Grid>
						</Grid>
						<Hidden lgUp>
							<IconButton
								edge="end"
								className={classes.cartButton}
								color="inherit"
								aria-label="menu"
								onClick={() => setCartOpen(true)}>
								<HiOutlineShoppingBag size="28" />
							</IconButton>
						</Hidden>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	// AppBar
	appBarWrapper: {},
	appBar: {
		height: '65px',
		backgroundColor: theme.palette.cream.main,
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
		[theme.breakpoints.down('md')]: {
			justifyContent: 'center',
		},
		'& li': {
			// marginBottom: '35px',
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
		},
	},
	// Links
	linklist: {
		display: 'flex',
		alignItems: 'center',
		margin: 0,
		padding: 0,
		listStyle: 'none',
		'& > li': {
			margin: `0 ${theme.spacing(2)}px`,
		},
	},
	linklistLeft: {
		flexGrow: 0.6,
		justifyContent: 'space-evenly',
	},
	linklistRight: {
		justifyContent: 'flex-end',
	},
	link: {
		// fontFamily: theme.typography.h6.fontFamily,
		fontWeight: 200,
		fontSize: theme.typography.subtitle1.fontSize,
		color: theme.palette.primary.main,
		padding: '5px 8px',
		textDecoration: 'none',
		textUnderlineOffset: '2px',
		textDecorationThickness: 'auto',
		'&.active': {
			// textDecoration: 'underline',
		},
		'&:hover': {
			textDecoration: 'underline',
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
		lineHeight: 0,
	},
	logo: {
		maxWidth: 180,
		[theme.breakpoints.down('sm')]: {
			maxWidth: 110,
		},
		[theme.breakpoints.down('xs')]: {
			maxWidth: 95,
		},
	},
	// desktop
	desktopNav: {
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
	// menuButton
	menuButton: {
		color: theme.palette.neutral.main,
		[theme.breakpoints.down('md')]: {
			position: 'absolute',
			left: theme.spacing(1),
		},
		'& svg': {
			width: '28px',
			height: '28px',
			'& path': {
				stroke: theme.palette.neutral.main,
			},
		},
		'&:hover': {
			'& svg': {
				'& path': {
					stroke: theme.palette.primary.main,
				},
			},
		},
	},
	cartButton: {
		position: 'absolute',
		right: theme.spacing(1),
		color: theme.palette.neutral.main,
		'&:active': {
			color: theme.palette.primary.main,
		},
		'& path': {
			strokeWidth: '1.3px',
		},
	},
}))

export default Header
