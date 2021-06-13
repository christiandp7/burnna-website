import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SwipeableViews from 'react-swipeable-views'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { FiX } from 'react-icons/fi'
// components
import SGTabs from '../SizeGuideTabs/SGTabs'
import SGTab from '../SizeGuideTabs/SGTab'
import SGTabPanel from '../SizeGuideTabs/SGTabPanel'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LinkButton from '../Button/LinkButton'
import SizeGuideAccordion from '../Accordion/SizeGuideAccordion'
// data
import { bodySizeAccordionItems } from '../../data/bodySize'
import { measurementsAccordionItems } from '../../data/measurements'
import Heading from '../Typography/Heading'
import SizeGuideSidebarHeader from './SizeGuideSidebarHeader'
import SizeGuideSidebarFooter from './SizeGuideSidebarFooter'
import SizeGuideSidebarBody from './SizeGuideSidebarBody'

const SizeGuideSidebarContent = () => {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const handleSwipable = newValue => {
		setValue(newValue)
	}

	return (
		<Scrollbars
			// autoHeight
			// autoHeightMin="100%"
			style={{ minHeight: '100vh' }}
			autoHide
			autoHideTimeout={2000}
			autoHideDuration={300}>
			<Grid
				container
				wrap="nowrap"
				direction="column"
				className={classes.root}>
				{/* HEADER */}
				<SizeGuideSidebarHeader
					value={value}
					handleChange={handleChange}
				/>
				{/* BODY */}
				<SizeGuideSidebarBody
					value={value}
					handleSwipable={handleSwipable}
				/>
				{/* FOOTER */}
				<SizeGuideSidebarFooter />
			</Grid>
		</Scrollbars>
	)
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		color: theme.palette.primary.contrastText,
		cursor: 'default',
		padding: `0 ${theme.spacing(5)}px`,
	},

	body: {
		marginTop: theme.spacing(1),
	},
	swipableViews: {
		height: '100%',
		'& .react-swipeable-view-container': {
			height: '100%',
		},
	},
	tabPanel: { height: '100%' },
	tabPanelWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		height: '100%',
		// alignItems: 'center',
	},
	accordionWrapper: {},
	accordionTitle: {
		marginBottom: theme.spacing(1),
		fontWeight: theme.typography.fontWeightBold,
		// letterSpacing: '2px',
	},
}))

export default SizeGuideSidebarContent