import React from 'react'
import SizeGuideRow from '../components/SizeGuideSidebar/SizeGuideRow'

const BURNNA_SIZES = ['0', '0', '0', '0', '0']
const USA_SIZES = ['4', '6', '8', '10', '12']
const FRANCE_SIZES = ['36', '38', '40', '42', '44']
const UK_SIZES = ['8', '10', '12', '14', '16']

export const bodySizeAccordionItems = [
	{
		summary: 'BURNNA',
		details: <SizeGuideRow sizes={BURNNA_SIZES} />,
	},
	{
		summary: 'USA',
		details: <SizeGuideRow sizes={USA_SIZES} />,
	},
	{
		summary: 'France',
		details: <SizeGuideRow sizes={FRANCE_SIZES} />,
	},
	{
		summary: 'UK',
		details: <SizeGuideRow sizes={UK_SIZES} />,
	},
]
