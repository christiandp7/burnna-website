import React from 'react'
import Container from '@material-ui/core/Container'
import FAQLayout from '../../layouts/FAQLayout'
import FAQAccordion from '../../components/Accordion/FAQAccordion'
import Heading from '../../components/Typography/Heading'
import Typography from '@material-ui/core/Typography'
// data
import returnPolicyFaqs from '../../data/returnPolicy'

const ReturnPolicy = () => {
	return (
		<FAQLayout top="50px" mobTop="30px">
			<Container>
				<Heading textTransform="initial">Return Policy</Heading>
				<FAQAccordion faqs={returnPolicyFaqs} />
			</Container>
		</FAQLayout>
	)
}

export default ReturnPolicy
