import React from 'react'
import { makeStyles, styled } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const SelectorButton = styled(({ bgColor, ...other }) => (
	<IconButton {...other} />
))(
	props => ({
		// width: props.size,
		// height: props.size,
		// backgroundColor: props.bgColor,
		// borderRadius: '50%',
		// border: 'solid 1px',
		// borderColor: props.theme.palette.neutral.main,
		// padding: '0',
		// color: 'white',
		// minWidth: '0',
		// '&:hover': {
		// 	backgroundColor: props.bgColor,
		// },

		fontSize: props.theme.typography.h5.fontSize,
		fontWeight: props.theme.typography.fontWeightRegular,
		textTransform: 'uppercase',
		width: '40px',
		height: '40px',
		padding: 0,
		lineHeight: 1,
	}),
	{ withTheme: true },
)

const SizeSelectorButtonGroup = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<SelectorButton variant="text">m</SelectorButton>
			<SelectorButton variant="text">l</SelectorButton>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		display: 'inline-flex',
		margin: '15px 0',
		'& button:not(:last-child)': {
			marginRight: '12px',
		},
	},
}))

export default SizeSelectorButtonGroup
