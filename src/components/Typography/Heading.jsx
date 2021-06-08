import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Heading = ({ component = 'h2', variant = 'h4', ...props }) => {
	const classes = useStyles(props)
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
	root: props => ({
		textTransform: 'uppercase',
		fontWeight: '700',
		fontFamily: theme.typography.h6.fontFamily,
		textDecoration: props.underline || 'underline',
		textUnderlineOffset: '4px',
		marginBottom: theme.spacing(props.mb || 3),
	}),
}))

export default Heading
