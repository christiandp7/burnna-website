import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import Footer from '../components/Footer/Footer'
// import { Scrollbars } from 'react-custom-scrollbars-2'

const HomeLayout = ({ children, ...props }) => {
	const [sidebar, setSidebar] = useState(false)
	const [cart, setCart] = useState(false)

	const classes = useStyles(props)

	return (
		<>
			{/* <Scrollbars
				style={{ height: '100vh' }}
				autoHide
				autoHideTimeout={2000}
				autoHideDuration={300}> */}
			<HomeHeader />
			<main className={classes.main}>{children}</main>
			<Footer />
			{/* </Scrollbars> */}
		</>
	)
}

const useStyles = makeStyles(theme => ({
	main: props => ({
		paddingBottom: props.Bottom || '30px',
		minHeight: '70vh',
		[theme.breakpoints.down('md')]: {
			paddingBottom: props.Bottom || '12px',
		},
	}),
}))

export default HomeLayout
