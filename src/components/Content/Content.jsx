import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styles from './Content.module.scss';

const Content = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <h2>content starts</h2>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h2>content end</h2>
    </main>
  )
}

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: 'white'
  }
}))

export default Content
