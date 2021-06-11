import React from 'react'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'

const SGTab = withStyles(theme => ({
	root: {
		// textTransform: 'none',
		minWidth: 72,
		// fontWeight: theme.typography.fontWeightRegular,
		// marginRight: theme.spacing(3),
		'&:hover': {
			// color: '#40a9ff',
			// opacity: 1,
		},
		'&$selected': {
			// color: '#1890ff',
			// fontWeight: theme.typography.fontWeightMedium,
		},
		'&:focus': {
			// color: '#40a9ff',
		},
	},
	selected: {},
}))(props => <Tab disableRipple {...props} />)

export default SGTab
