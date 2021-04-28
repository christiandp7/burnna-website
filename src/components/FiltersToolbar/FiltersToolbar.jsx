import React from 'react'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import { VscChevronDown } from 'react-icons/vsc';  


const FiltersToolbar = () => {
  return (
    <Toolbar>
      <Button
        color="secundary"
        endIcon={<VscChevronDown />}
        size="large"
        // disableRipple={true}
      >
        Category
      </Button>
      <Button
        color="secundary"
        endIcon={<VscChevronDown />}
        size="large"
        // disableRipple={true}
      >
        Availability
      </Button>
      <Button
        color="secundary"
        endIcon={<VscChevronDown />}
        size="large"
        // disableRipple={true}
      >
        Size
      </Button>
      <Button
        color="secundary"
        endIcon={<VscChevronDown />}
        size="large"
        // disableRipple={true}
      >
        Color
      </Button>
      <Button
        color="secundary"
        endIcon={<VscChevronDown />}
        size="large"
        // disableRipple={true}
      >
        Type
      </Button>
    </Toolbar>
  )
}

const useStyles = makeStyles(theme => ({

}))

export default FiltersToolbar
