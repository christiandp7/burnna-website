import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const HomeHeader = () => {
	const classes = useStyles()

	return (
		<ul className={classes.navbar}>
			<li>
				<Link to="/collection">
					<Typography variant="h6" color="primary">
						Shop All
					</Typography>
				</Link>
			</li>
			<li>
				<Link to="/">
					<Typography variant="h6" color="primary">
						Our World
					</Typography>
				</Link>
			</li>
			<li>
				<Link to="/">
					<Typography variant="h6" color="primary">
						Español
					</Typography>
				</Link>
			</li>
		</ul>
	)
}

const useStyles = makeStyles(theme => ({
	navbar: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: `0 ${theme.spacing(2)}px`,
		height: '55px',
		margin: 0,
		listStyle: 'none',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
			padding: `0 ${theme.spacing(1)}px`,
		},

		'& li': {
			margin: `0 ${theme.spacing(3)}px`,
			[theme.breakpoints.down('xs')]: {
				margin: `0 ${theme.spacing(1)}px`,
			},
		},
		'& a': {
			textDecoration: 'none',
			textUnderlineOffset: '1px',
			textDecorationColor: theme.palette.primary.main,
			fontWeight: 700,
		},
		'& a:hover': {
			textDecoration: 'underline',
		},
	},
}))

export default HomeHeader
