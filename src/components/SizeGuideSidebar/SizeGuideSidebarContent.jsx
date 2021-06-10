import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const SizeGuideSidebarContent = () => {
	const classes = useStyles()
	return <div className={classes.root}>SizeGuide</div>
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		color: theme.palette.primary.contrastText,
		cursor: 'default',
	},
}))

export default SizeGuideSidebarContent
