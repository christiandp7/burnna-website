import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const SGTabPanel = props => {
	const { children, value, index, ...other } = props
	const classes = useStyles()

	return (
		<div
			className={classes.tabPanelContent}
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`size-guide-tab-${index}`}
			{...other}>
			{/* {value === index && (
      )} */}
			<Typography>{children}</Typography>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	tabPanelContent: {
		padding: `${theme.spacing(3)}px 0`,
	},
}))

export default SGTabPanel
