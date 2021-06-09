import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
// components
import InfoSidebarContent from './FAQSidebarContent'

const drawerWidth = 190

const InfoSidebar = ({ open, setOpen }) => {
	const classes = useStyles()

	return (
		// <Drawer
		// 	open={open}
		// 	variant="temporary"
		// 	onClose={() => setOpen(false)}
		// 	classes={{
		// 		paper: classes.drawerPaper,
		// 	}}>
		// 	<InfoSidebarContent />
		// </Drawer>

		<nav className={classes.drawer} aria-label="info sidebar">
			{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
			<Hidden mdUp implementation="css">
				<Drawer
					// container={container}
					open={open}
					variant="termporary"
					onClose={() => setOpen(false)}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}>
					<InfoSidebarContent />
				</Drawer>
			</Hidden>
			<Hidden smDown implementation="css">
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant="permanent"
					open>
					<InfoSidebarContent />
				</Drawer>
			</Hidden>
		</nav>
	)
}

const useStyles = makeStyles(theme => ({
	drawerPaper: {
		backgroundColor: theme.palette.primary.main,
	},
}))

export default InfoSidebar
