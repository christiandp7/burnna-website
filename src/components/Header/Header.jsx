import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// assets
import logo from '../../assets/images/logo.png'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        
      </Toolbar>
    </AppBar>
  )
}

// const Header = () => {
//   return (
//     <div>
//       <div className="header-container">

//       <ul className={styles.menu}>
//         <li className={styles.menuItem}>
//           <a>Women</a>
//         </li>
//         <li className={styles.menuItem}>
//           <a>Men</a>
//         </li>
//         <li className={styles.menuItem}>
//           <a>Explore</a>
//         </li>
//         <li className={styles.logoItem}>
//           <a>
//             logo
//           </a>
//         </li>
//         <li className={styles.menuItem}>
//           <a>English</a>
//         </li>
//         <li className={styles.menuItem}>
//           <a>Wishlist</a>
//         </li>
//         <li className={styles.menuItem}>
//           <a>Shopping Bag</a>
//         </li>
//       </ul>
//       </div>
//     </div>
//   )
// }

export default Header
