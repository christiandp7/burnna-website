import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// components
import LinkButton from '../Button/LinkButton'

const SizeGuideSidebarFooter = () => {
	const classes = useStyles()
	return (
		<Grid
			container
			item
			justify="space-between"
			className={classes.footer}>
			<LinkButton color="secondary">Details</LinkButton>
			<LinkButton color="secondary">Assistance</LinkButton>
		</Grid>
	)
}

const useStyles = makeStyles(theme => ({
	footer: {
		// marginTop: theme.spacing(1),
		paddingBottom: theme.spacing(3),
	},
}))

export default SizeGuideSidebarFooter
