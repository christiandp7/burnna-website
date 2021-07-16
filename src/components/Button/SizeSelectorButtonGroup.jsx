import React from 'react'
import { makeStyles, styled, withStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

// const StyledButton = styled(({ bgColor, ...other }) => (
// 	<Button {...other} />
// ))(
// 	props => ({
// 		// styles
// 	}),
// 	{ withTheme: true },
// )

const SizeButton = withStyles(theme => ({
	root: {
		fontWeight: theme.typography.fontWeightRegular,
		fontSize: theme.typography.h5.fontSize,
		'& span': {
			// lineHeight: theme.typography.h5.lineHeight,
		},
	},
}))(Button)

const SizeSelectorButtonGroup = () => {
	const classes = useStyles()
	return (
		// <div className={classes.root}>
		// 	<SelectorButton variant="text">xs-s</SelectorButton>
		// 	<SelectorButton variant="text">s-m</SelectorButton>
		// 	<SelectorButton variant="text">m-l</SelectorButton>
		// 	<SelectorButton variant="text">xl-l</SelectorButton>
		// </div>

		// <ButtonGroup
		// 	variant="text"
		// 	size="large"
		// 	color="default"
		// 	aria-label="">
		// 	<StyledButton>xs-s</StyledButton>
		// 	<StyledButton>s-m</StyledButton>
		// 	<StyledButton>m-l</StyledButton>
		// 	<StyledButton>xl-l</StyledButton>
		// </ButtonGroup>
		<div className={classes.root}>
			<SizeButton size="small">xs-s</SizeButton>
			<SizeButton size="small">s-m</SizeButton>
			<SizeButton size="small">m-l</SizeButton>
			<SizeButton size="small">xl-l</SizeButton>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		margin: `${theme.spacing(1)}px 0`,
		'& button:not(:last-child)': {
			marginRight: theme.spacing(1),
		},
	},
}))

export default SizeSelectorButtonGroup
