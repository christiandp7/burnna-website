import React from 'react'
import { Layout, Menu } from 'antd';

import styles from './Header.module.scss'

const { Item } = Menu;

const Header = () => {
  return (
    <Layout.Header className={styles.header} theme="light">
      <div className="header-container">

      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a>Women</a>
        </li>
        <li className={styles.menuItem}>
          <a>Men</a>
        </li>
        <li className={styles.menuItem}>
          <a>Explore</a>
        </li>
        <li className={styles.logoItem}>
          <a>English</a>
        </li>
        <li className={styles.menuItem}>
          <a>English</a>
        </li>
        <li className={styles.menuItem}>
          <a>Wishlist</a>
        </li>
        <li className={styles.menuItem}>
          <a>Shopping Bag</a>
        </li>
      </ul>
      </div>
    </Layout.Header>
  )
}

export default Header
