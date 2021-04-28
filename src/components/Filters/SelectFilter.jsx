import React from 'react'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const CustomButtom = styled(Button)({

})

const SelectFilter = () => {
  return (
    <div>
      <Button
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
    </div>
  )
}

export default SelectFilter
