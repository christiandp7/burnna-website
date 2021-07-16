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
		// borderRadius: '50%',
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
				size="32px"
			/>
			<SelectorButton
				disableRipple={true}
				bgColor="#A58F8F"
				size="32px"
			/>
			<SelectorButton
				disableRipple={true}
				bgColor="#3a3a3a"
				size="32px"
			/>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		margin: `${theme.spacing(2)}px 0`,
		'& button': {
			margin: '0 10px',
			// marginRight: theme.spacing(2),
		},
	},
}))

export default ColorSelectorButtonGroup
