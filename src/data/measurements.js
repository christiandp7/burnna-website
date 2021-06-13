import React from 'react'
import SizeGuideRow from '../components/SizeGuideSidebar/SizeGuideRow'

const UNDER_BUST_SIZES = ['70-73', '74-77', '78-82', '83-87', '88-92']
const WAIST_SIZES = ['70-73', '74-77', '78-82', '83-87', '88-92']
const HIP_SIZES = ['70-73', '74-77', '78-82', '83-87', '88-92']

export const measurementsAccordionItems = [
	{
		summary: 'Under Bust',
		details: <SizeGuideRow sizes={UNDER_BUST_SIZES} />,
	},
	{
		summary: 'Waist',
		details: <SizeGuideRow sizes={WAIST_SIZES} />,
	},
	{
		summary: 'Hip',
		details: <SizeGuideRow sizes={HIP_SIZES} />,
	},
]
