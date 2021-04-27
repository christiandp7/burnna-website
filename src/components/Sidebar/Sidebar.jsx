import React from 'react'
import Link from '@material-ui/core/Link';
// assets
import styles from './Sidebar.module.scss';
import logo from '../../assets/images/logo.png'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Sidebar = () => {

  const preventDefault = (e) => e.preventDefault();

  return (
    <aside className={styles.sidebar}>
      <img className={styles.logo} src={logo} alt="logo"/>
        <Box 
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
          paddingBottom="50px"
          alignItems="center"
          margin="0"
          padding="0"
        >
          <Typography variant="h6">
            <Link color="inherit" href="#" onClick={preventDefault}>All</Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#" onClick={preventDefault}>Swimwear</Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#" onClick={preventDefault}>Shirts</Link>
          </Typography>
          <Typography variant="h6">
            <Link href="#" onClick={preventDefault}>Accesories</Link>
          </Typography>
        </Box>
    </aside>
  )
}

export default Sidebar
