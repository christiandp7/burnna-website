import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
// components
import SizeGuideSidebarContent from './SizeGuideSidebarContent'
import DrawerContext from '../../context/DrawerContext'

const SizeGuideSizebar = () => {
	const { sizeGuideOpen, setSizeGuideOpen } = useContext(DrawerContext)
	const classes = useStyles()

	return (
		<Drawer
			open={sizeGuideOpen}
			onClose={() => setSizeGuideOpen(false)}
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
