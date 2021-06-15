import React from 'react'
import Container from '@material-ui/core/Container'
import FAQLayout from '../../layouts/FAQLayout'
import FAQAccordion from '../../components/Accordion/FAQAccordion'
import Heading from '../../components/Typography/Heading'
import Typography from '@material-ui/core/Typography'
// data
import shippingPolicyFaqs from '../../data/shippingPolicy'

const ShippingPolicy = () => {
	return (
		<FAQLayout top="50px" mobTop="30px" alignItemsCenter>
			<Container>
				<Heading textTransform="initial">Shipping policy</Heading>
				<FAQAccordion faqs={shippingPolicyFaqs} />
			</Container>
		</FAQLayout>
	)
}

export default ShippingPolicy
