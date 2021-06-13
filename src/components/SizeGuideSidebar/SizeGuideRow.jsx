import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const USA_SIZES = ['4', '6', '8', '10', '12']

const SizeGuideRow = ({ sizes }) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			{sizes.map(size => (
				<Typography variant="body2" className={classes.size}>
					{size}
				</Typography>
			))}
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	size: {
		marginRight: theme.spacing(2),
	},
}))

export default SizeGuideRow
