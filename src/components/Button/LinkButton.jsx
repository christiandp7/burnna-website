import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const LinkButton = withStyles(theme => ({
	root: {
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
}))(props => (
	<Button
		{...props}
		variant="text"
		disableRipple={true}
		underline="always">
		{props.children}
	</Button>
))

export default LinkButton
