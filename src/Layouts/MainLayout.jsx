import React from 'react'

import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
  return (
      <div className="Main">
        <Sidebar />
        <Header />
        <Content />
        <Footer />
      </div>
  )
}

export default MainLayout
