import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';

const useStyles = makeStyles({
  container: {
    paddingLeft: '200px',
  },
});

const MainLayout = () => {

  const classes = useStyles();

  return (
      <div className="Main">
        <Sidebar />
        <div className={classes.container}>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
  )
}

export default MainLayout
