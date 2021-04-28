import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styles from './Content.module.scss';

const Content = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      
    </main>
  )
}

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: 'white'
  }
}))

export default Content
