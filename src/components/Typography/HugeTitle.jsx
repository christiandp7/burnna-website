import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const HugeTitle = props => {
	const classes = useStyles()
	return (
		<Box className={classes.wrapper}>
			<Typography component="h1" className={classes.title}>
				{props.children}
			</Typography>
		</Box>
	)
}

const useStyles = makeStyles(theme => ({
	wrapper: {
		margin: '0 auto',
		width: '50%',
		// maxWidth: '50%',
		background: 'aqua',
	},
	title: {
		textTransform: 'uppercase',
		fontFamily: theme.typography.h6.fontFamily,
		textAlign: 'center',
		// fontSize: '70vw',
		fontSize: '10vw',
		fontWeight: 700,
	},
}))

export default HugeTitle
