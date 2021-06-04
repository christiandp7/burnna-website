import React from 'react'
import { makeStyles, styled } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

// const AddToCartButton = ({ children }) => {
// 	return <Button></Button>
// }

// const useStyles = makeStyles(theme => ({}))

const AddToCartButton = styled(Button)(({ theme }) => ({
	background: '#403737',
	border: 0,
	borderRadius: 0,
	color: 'white',
	// height: '60px',
	width: '100%',
	padding: '25px 30px',
	'&:hover': {
		background: theme.palette.primary.main,
		boxShadow: '0 2px 10px 1px rgba(10, 10, 10, .3)',
	},
}))

export default AddToCartButton
