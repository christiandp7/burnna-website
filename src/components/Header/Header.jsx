import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// assets
import logo from '../../assets/images/isotype_black.png'
import styles from './Header.module.scss'


const Header = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar} color="white" position="static">
      <Container>
        <Toolbar className={classes.toolbar} component="ul" disableGutters={true}>
          <li>
            <Link className={classes.link} underline="none" href="#">Women <span>- SWIMWEAR</span></Link>
          </li>
          <li>
            <Link className={classes.link} underline="none" href="#">Men</Link>
          </li>
          <li>
            <Link className={classes.link} underline="none" href="#">Explore</Link>
          </li>
          <NavLink to="/">
            <img className={classes.logo} src={logo} alt="logotype" />
          </NavLink>
          <li>
            <Link className={classes.link} underline="none" href="#">English</Link>
          </li>
          <li>
            <Link className={classes.link} underline="none" href="#">Wishlist</Link>
          </li>
          <li>
            <Link className={classes.link} underline="none" href="#">Shopping Bag</Link>
          </li>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const useStyles = makeStyles( theme => ({
  // AppBar
  appBar: {
    fontFamily: '"Jules Text"',
    textTransform: 'uppercase',
    boxShadow: 'none',
  },
  // Toolbar 
  toolbar: {
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: 0,
    '& > li': {
      marginBottom: '35px'
    }
  },
  // Links
  link: {
    fontFamily: '"Jules Text"',
    fontWeight: 700,
    fontSize: theme.typography.subtitle1.fontSize,
    color: theme.palette.primary.contrastText,
    padding: '5px 8px',
    '& > span': {
      fontWeight: 400,
      fontFamily: '"Proxima Nova Condensed"',
      letterSpacing: '0.5px',
    }
  },
  // Logo
  logo: {
    maxWidth: 130,
  }
}))

export default Header
