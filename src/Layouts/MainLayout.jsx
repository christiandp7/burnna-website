import React from 'react'
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
  return (
      <Layout style={{minHeight: '100vh'}}>
        <Sidebar />
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
  )
}

export default MainLayout
