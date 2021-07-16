import React from 'react'
import { makeStyles, styled } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const SelectorButton = styled(({ bgColor, ...other }) => (
	<Button {...other} />
))(
	props => ({
		width: props.size,
		height: props.size,
		backgroundColor: props.bgColor,
		borderRadius: '50%',
		border: 'solid 1px',
		borderColor: props.theme.palette.neutral.main,
		padding: '0',
		color: 'white',
		minWidth: '0',
		'&:hover': {
			backgroundColor: props.bgColor,
			// boxShadow: `0 1px 3px 4px ${props.bgColor}`,
		},
	}),
	{ withTheme: true },
)

const ColorSelectorButtonGroup = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<SelectorButton
				disableRipple={true}
				bgColor="#340404"
				size="22px"
			/>
			<SelectorButton
				disableRipple={true}
				bgColor="#A58F8F"
				size="22px"
			/>
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

export default ColorSelectorButtonGroup
