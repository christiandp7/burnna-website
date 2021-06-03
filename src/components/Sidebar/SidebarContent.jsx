import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
// assets
import logo from '../../assets/images/logo.png'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Sidebar = () => {
	const classes = useStyles()
	const preventDefault = e => e.preventDefault()

	return (
		<aside className={classes.sidebar}>
			{/* <img className={styles.logo} src={logo} alt="logo"/> */}
			<Box
				height={150}
				fontFamily="Jules text"
				fontSize={24}
				className={classes.logo}
				letterSpacing="3px"
				display="flex"
				justifyContent="center"
				alignItems="center">
				<Link
					className={classes.logoLink}
					underline="none"
					href="#"
					onClick={preventDefault}>
					BURNNA
				</Link>
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				height="100%"
				justifyContent="space-around"
				paddingBottom="50px"
				alignItems="center"
				margin="0"
				padding="0"
				fontFamily="Jules Text">
				<Typography variant="h6">
					<Link
						className={classes.sidebarLink}
						underline="none"
						href="#"
						onClick={preventDefault}>
						All
					</Link>
				</Typography>
				<Typography variant="h6">
					<Link
						className={classes.sidebarLink}
						underline="none"
						href="#"
						onClick={preventDefault}>
						Swimwear
					</Link>
				</Typography>
				<Typography variant="h6">
					<Link
						className={classes.sidebarLink}
						underline="none"
						href="#"
						onClick={preventDefault}>
						Shirts
					</Link>
				</Typography>
				<Typography variant="h6">
					<Link
						className={classes.sidebarLink}
						underline="none"
						href="#"
						onClick={preventDefault}>
						Accesories
					</Link>
				</Typography>
			</Box>
		</aside>
	)
}

const useStyles = makeStyles(theme => ({
	sidebar: {
		position: 'fixed',
		top: 0,
		left: 0,
		height: '100vh',
		width: '200px',
		background: '#0A0A0A',
		display: 'flex',
		flexDirection: 'column',
	},
	// Logo
	logo: {
		color: theme.palette.primary.main,
	},
	logoLink: {
		padding: '10px 15px',
	},
	// Sidebar Links
	sidebarLink: {
		padding: '5px 8px',
		fontSize: '1.1rem',
		letterSpacing: '1px',
	},
}))

export default Sidebar
