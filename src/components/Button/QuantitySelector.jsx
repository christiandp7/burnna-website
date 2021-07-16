import React from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { FiPlus, FiMinus } from 'react-icons/fi'

const QuantitySelector = ({ counter, setCounter }) => {
	return (
		<Grid container alignItems="center" spacing={2}>
			<Grid item>
				<IconButton
					aria-label="add"
					disableRipple
					size="small"
					color="secondary"
					onClick={() => setCounter(counter + 1)}>
					<FiPlus />
				</IconButton>
			</Grid>
			<Grid item>
				<Typography variant="h5" color="inherit">
					{counter}
				</Typography>
			</Grid>
			<Grid item>
				<IconButton
					aria-label="add"
					disableRipple
					size="small"
					color="secondary"
					onClick={() => counter > 1 && setCounter(counter - 1)}>
					<FiMinus />
				</IconButton>
			</Grid>
		</Grid>
	)
}

export default QuantitySelector
