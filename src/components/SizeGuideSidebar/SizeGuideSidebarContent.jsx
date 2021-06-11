import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
// components
import SGTabs from '../SizeGuideTabs/SGTabs'
import SGTab from '../SizeGuideTabs/SGTab'
import SGTabPanel from '../SizeGuideTabs/SGTabPanel'

const SizeGuideSidebarContent = () => {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<SGTabs
					value={value}
					onChange={handleChange}
					fullWidth
					aria-label="Size Guide">
					<SGTab label="Women Swinms" />
					<SGTab label="Men Swimns" />
				</SGTabs>
			</AppBar>
			<SwipeableViews
				axis="x"
				index={value}
				enableMouseEvents
				disableLazyLoading
				onChangeIndex={index => setValue(index)}>
				<SGTabPanel value={value} index={0}>
					Item One
				</SGTabPanel>
				<SGTabPanel value={value} index={1}>
					Item Two
				</SGTabPanel>
			</SwipeableViews>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		color: theme.palette.primary.contrastText,
		cursor: 'default',
		padding: `${theme.spacing(3)}px ${theme.spacing(5)}px`,
	},
}))

export default SizeGuideSidebarContent
