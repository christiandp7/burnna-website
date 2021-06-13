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

const SizeGuideSidebarContent = () => {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
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
			{/* HEADER */}
			<Grid
				container
				wrap="nowrap"
				direction="column"
				className={classes.root}>
				<Grid item className={classes.header}>
					<AppBar
						component="div"
						elevation={0}
						position="static"
						color="transparent">
						<Toolbar disableGutters variant="dense">
							<IconButton
								aria-label="close"
								disableRipple
								color="secondary"
								style={{ marginLeft: 'auto' }}
								edge="end">
								<FiX />
							</IconButton>
						</Toolbar>
					</AppBar>
					<AppBar
						component="div"
						elevation={0}
						position="static"
						color="transparent">
						<SGTabs
							value={value}
							onChange={handleChange}
							fullWidth
							aria-label="Size Guide">
							<SGTab label="Women Swinms" />
							<SGTab label="Men Swimns" />
						</SGTabs>
					</AppBar>
				</Grid>
				{/* BODY */}
				<Grid item xs className={classes.body}>
					<SwipeableViews
						axis="x"
						index={value}
						enableMouseEvents
						className={classes.swipableViews}
						disableLazyLoading
						onChangeIndex={index => setValue(index)}>
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
				{/* FOOTER */}
				<Grid
					container
					item
					justify="space-between"
					className={classes.footer}>
					<LinkButton color="secondary">Details</LinkButton>
					<LinkButton color="secondary">Assistance</LinkButton>
				</Grid>
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
	header: {
		paddingTop: theme.spacing(2),
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
	footer: {
		// marginTop: theme.spacing(1),
		paddingBottom: theme.spacing(3),
	},
}))

export default SizeGuideSidebarContent
