import React from 'react'
import Container from '@material-ui/core/Container'
import FAQLayout from '../../layouts/FAQLayout'
import FAQAccordion from '../../components/Accordion/FAQAccordion'
import Heading from '../../components/Typography/Heading'
import Typography from '@material-ui/core/Typography'
// data
import returnPolicyFaqs from '../../data/returnPolicy'
// import { makeStyles } from '@material-ui/core/styles'

const ReturnPolicy = () => {
	// const classes = useStyles()
	return (
		<FAQLayout top="50px" mobTop="30px" alignItemsCenter>
			<Container>
				<Heading textTransform="initial">Return policy</Heading>
				<FAQAccordion faqs={returnPolicyFaqs} />
			</Container>
		</FAQLayout>
	)
}

// const useStyles = makeStyles(theme => ({}))

export default ReturnPolicy
