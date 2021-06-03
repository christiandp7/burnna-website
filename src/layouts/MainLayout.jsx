import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const useStyles = makeStyles({
	container: {
		// paddingLeft: '200px',
	},
})

const MainLayout = ({ children }) => {
	const classes = useStyles()

	return (
		<div className="Main">
			{/* <Sidebar /> */}
			<div className={classes.container}>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	)
}

export default MainLayout
