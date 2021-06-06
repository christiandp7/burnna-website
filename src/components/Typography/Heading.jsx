import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Heading = ({ component = 'h2', variant = 'h4', ...props }) => {
	const classes = useStyles()
	return (
		<Typography
			{...props}
			component={component}
			variant={variant}
			className={classes.root}>
			{props.children}
		</Typography>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		textTransform: 'uppercase',
		fontWeight: '700',
		fontFamily: theme.typography.h6.fontFamily,
		textDecoration: 'underline',
		textUnderlineOffset: '4px',
		marginBottom: '30px',
	},
}))

export default Heading
