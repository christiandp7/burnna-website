import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
// components
import SizeGuideSidebarContent from './SizeGuideSidebarContent'

const SizeGuideSizebar = () => {
	const [open, setOpen] = useState(true)
	const classes = useStyles()

	return (
		<Drawer
			open={open}
			onClose={() => setOpen(false)}
			anchor="left"
			classes={{
				paper: classes.drawerPaper,
			}}
			transitionDuration={{
				enter: 550,
				exit: 350,
			}}>
			<SizeGuideSidebarContent />
		</Drawer>
	)
}

const useStyles = makeStyles(theme => ({
	drawerPaper: {
		width: '450px',
		maxWidth: '100%',
		backgroundColor: theme.palette.primary.main,
	},
}))

export default SizeGuideSizebar
