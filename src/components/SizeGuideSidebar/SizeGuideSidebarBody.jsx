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

const SizeGuideSidebarBody = ({ value, handleSwipable }) => {
	const classes = useStyles()
	return (
		<Grid item xs className={classes.body}>
			<SwipeableViews
				axis="x"
				index={value}
				enableMouseEvents
				className={classes.swipableViews}
				disableLazyLoading
				onChangeIndex={handleSwipable}>
				<SGTabPanel
					className={classes.tabPanel}
					value={value}
					index={0}>
					<div className={classes.tabPanelWrapper}>
						<div className={classes.accordionWrapper}>
							<Typography
								className={classes.accordionTitle}
								variant="subtitle2">
								Body Size
							</Typography>
							<SizeGuideAccordion
								sizeGuideItems={bodySizeAccordionItems}
							/>
						</div>
						<div className={classes.accordionWrapper}>
							<Typography
								className={classes.accordionTitle}
								variant="subtitle2">
								Measurements
							</Typography>
							<SizeGuideAccordion
								sizeGuideItems={measurementsAccordionItems}
							/>
						</div>
					</div>
				</SGTabPanel>
				<SGTabPanel value={value} index={1}>
					Item Two
				</SGTabPanel>
			</SwipeableViews>
		</Grid>
	)
}

const useStyles = makeStyles(theme => ({
	body: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
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
		marginBottom: `${theme.spacing(1) - 2}px`,
		fontWeight: theme.typography.fontWeightBold,
		// letterSpacing: '2px',
	},
}))

export default SizeGuideSidebarBody
