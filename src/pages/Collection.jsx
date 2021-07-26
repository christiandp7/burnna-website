import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// Layout
import MainLayout from '../layouts/MainLayout'
// components
import LogoText from '../assets/svg/LogoText'
import CollectionGrid from '../components/CollectionGrid/CollectionGrid'
// assets
import { collectionItems } from '../data/collection'

const Collection = () => {
	const classes = useStyles()
	return (
		<MainLayout>
			<div className={classes.collectionWrapper}>
				<div className={classes.logoContainer}>
					<LogoText className={classes.logo} />
				</div>
				<CollectionGrid products={collectionItems} />
			</div>
		</MainLayout>
	)
}

const useStyles = makeStyles(theme => ({
	collectionWrapper: {
		position: 'relative',
	},
	logoContainer: {
		position: 'absolute',
		width: '100%',
		top: 0,
		textAlign: 'center',
		paddingTop: theme.spacing(3),
		zIndex: 1,
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
	logo: {
		width: '200px',
	},
}))

export default Collection
