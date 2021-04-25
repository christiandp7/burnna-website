import React from 'react'
import { Layout, Image } from 'antd';
// assets
import Logo from '../../assets/images/logo.png'

const Sidebar = () => {
  return (
    <Layout.Sider>
      <Image 
        width="100%"
        preview={false}
        src={Logo}
        alt="logo"
      />
    </Layout.Sider>
  )
}

export default Sidebar
