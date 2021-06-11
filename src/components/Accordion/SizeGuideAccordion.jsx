import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'

const Accordion = withStyles(theme => ({
	root: {
		// border: '1px solid rgba(0, 0, 0, .125)',
		backgroundColor: 'transparent',
		color: theme.palette.primary.contrastText,
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

const AccordionSummary = withStyles(theme => ({
	root: {
		backgroundColor: 'transparent',
		fontSize: theme.typography.h6.fontSize,
		// borderBottom: '1px solid rgba(0, 0, 0, .125)',
		padding: 0,
		marginBottom: -1,
		minHeight: 38,
		'&$expanded': {},
	},
	content: {
		margin: `${theme.spacing(1) - 2}px 0`,
		'&$expanded': {
			margin: `${theme.spacing(1)}px 0`,
		},
	},
	expanded: {},
}))(MuiAccordionSummary)

const AccordionDetails = withStyles(theme => ({
	root: {
		display: 'block',
		backgroundColor: 'transparent',
		paddingBottom: theme.spacing(3),
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		textTransform: 'none',
	},
}))(MuiAccordionDetails)

const SizeGuideAccordion = ({ sizeGuideItems }) => {
	const [expanded, setExpanded] = useState(null)

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false)
	}

	return (
		<div>
			{sizeGuideItems &&
				sizeGuideItems.map((sgItem, i) => (
					<Accordion
						key={sgItem.summary}
						square
						expanded={expanded === `panel${i}`}
						onChange={handleChange(`panel${i}`)}>
						<AccordionSummary
							aria-controls="panel2d-content"
							id={`panel${i}d-header`}>
							<Typography variant="subtitle1">
								{sgItem.summary}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>{sgItem.details}</AccordionDetails>
					</Accordion>
				))}
		</div>
	)
}

export default SizeGuideAccordion
