import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'

const Accordion = withStyles(theme => ({
	root: {
		background: 'transparent',
		border: 0,
		borderBottom: `solid 1px ${theme.palette.neutral.main}`,
		boxShadow: 'none',
		'&:before': {
			display: 'none',
		},
		'&$expanded': {
			margin: 'auto',
		},
	},
	expanded: {},
}))(MuiAccordion)

const AccordionSummary = withStyles({
	root: {
		backgroundColor: 'transparent',
		padding: 0,
		marginBottom: -1,
		minHeight: 50,
		'&$expanded': {
			minHeight: 56,
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles(theme => ({
	root: {
		paddingBottom: '26px',
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		textTransform: 'none',
	},
}))(MuiAccordionDetails)

export default function CustomAccordion() {
	const [expanded, setExpanded] = useState(null)

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false)
	}

	return (
		<div>
			<Accordion
				square
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}>
				<AccordionSummary
					aria-controls="panel1d-content"
					id="panel1d-header">
					<Typography component="h5" variant="h5">
						Care & Composition
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Suspendisse malesuada lacus ex, sit amet
						blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				square
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}>
				<AccordionSummary
					aria-controls="panel2d-content"
					id="panel2d-header">
					<Typography component="h5" variant="h5">
						Delivery & Returns
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Suspendisse malesuada lacus ex, sit amet
						blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				square
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}>
				<AccordionSummary
					aria-controls="panel2d-content"
					id="panel2d-header">
					<Typography component="h5" variant="h5">
						Description
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Suspendisse malesuada lacus ex, sit amet
						blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
