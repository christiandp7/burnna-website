import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
// assets
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { GrSpotify } from 'react-icons/gr'
import LogoComplete from '../../assets/svg/LogoComplete'

const Footer = () => {
	const classes = useStyles()
	return (
		<footer className={classes.footer}>
			<Container>
				<div className={classes.logoFooterContainer}>
					<LogoComplete className={classes.logoFooter} />
				</div>

				<Box display="Flex" justifyContent="space-between">
					<Grid className={classes.colContainer} container>
						<Grid item xs="12" md="6">
							<List component="ul">
								<ListItem component="li">
									<Typography
										className={`${classes.subtitle} ${classes.link}`}>
										Support
									</Typography>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										Contact
									</Link>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										Returns
									</Link>
								</ListItem>
							</List>
						</Grid>
						<Grid item xs="12" md="6">
							<List component="ul">
								<ListItem component="li">
									<Typography
										className={`${classes.subtitle} ${classes.link}`}>
										Information
									</Typography>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										Faq
									</Link>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										Size Guide
									</Link>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										Payment Methods
									</Link>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										Shipping
									</Link>
								</ListItem>
							</List>
						</Grid>
					</Grid>
					<Grid className={classes.colContainer} container>
						<Grid item xs="12" md="6">
							<List component="ul">
								<ListItem component="li">
									<Typography
										className={`${classes.subtitle} ${classes.link}`}>
										Social
									</Typography>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										<IconButton
											className={classes.socialIcon}
											size="small"
											color="inherit">
											<FaFacebookF />
										</IconButton>
									</Link>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										<IconButton
											className={classes.socialIcon}
											size="small"
											color="inherit">
											<GrSpotify />
										</IconButton>
									</Link>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										<IconButton
											className={classes.socialIcon}
											size="small"
											color="inherit">
											<GrInstagram />
										</IconButton>
									</Link>
								</ListItem>
							</List>
						</Grid>
						<Grid item xs="12" md="6">
							<List component="ul">
								<ListItem component="li">
									<Typography
										className={`${classes.subtitle} ${classes.link}`}>
										Company
									</Typography>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										About
									</Link>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										Campaigns
									</Link>
								</ListItem>
								<ListItem>
									<Link className={classes.link} href="#">
										Collabs
									</Link>
								</ListItem>
							</List>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</footer>
	)
}

const useStyles = makeStyles(theme => ({
	footer: {
		textTransform: 'uppercase',
		color: theme.palette.primary.main,
		paddingTop: '85px',
		paddingBottom: '70px',
		[theme.breakpoints.down('xs')]: {
			paddingTop: '55px',
			paddingBottom: '60px',
		},
	},
	logoFooterContainer: {
		textAlign: 'center',
		marginBottom: '50px',
		[theme.breakpoints.down('xs')]: {
			marginBottom: '35px',
		},
	},
	logoFooter: {
		maxWidth: '300px',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '50%',
		},
		[theme.breakpoints.down('xs')]: {
			maxWidth: '70%',
		},
	},
	colContainer: {
		width: '35%',
		[theme.breakpoints.down('xs')]: {
			width: '45%',
		},
	},
	subtitle: {
		fontWeight: 900,
		cursor: 'default',
	},
	link: {
		fontSize: theme.typography.subtitle1.fontSize,
		color: theme.palette.primary.main,
		letterSpacing: '0.5px',
	},
	socialIcon: {
		color: 'white',
		padding: '8px',
		backgroundColor: theme.palette.primary.main,
		'&:hover': {
			backgroundColor: grey[800],
		},
	},
}))

export default Footer
