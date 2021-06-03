import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
// components
import SidebarContent from './SidebarContent'

const Sidebar = ({ open, setOpen }) => {
	const classes = useStyles()

	return (
		<Drawer
			open={open}
			onClose={() => setOpen(false)}
			classes={{
				paper: classes.drawerPaper,
			}}>
			<SidebarContent />
		</Drawer>
	)
}

const useStyles = makeStyles(theme => ({
	drawerPaper: {
		// width: '100%',
		// backgroundColor:
	},
}))

export default Sidebar
