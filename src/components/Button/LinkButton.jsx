import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const LinkButton = props => {
	const classes = useStyles()
	return (
		<Button
			{...props}
			className={classes.root}
			color="primary"
			variant="text"
			disableRipple={true}
			underline="always">
			{props.children}
		</Button>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		fontSize: theme.typography.h5.fontSize,
		fontWeight: theme.typography.fontWeightRegular,
		textTransform: 'none',
		textDecoration: 'underline',
		textDecorationThickness: 'from-font',
		textUnderlineOffset: '2px',
		'&:hover': {
			textDecoration: 'underline',
			textDecorationThickness: '2px',
			textUnderlineOffset: '2px',
			backgroundColor: 'transparent',
		},
	},
}))

export default LinkButton
