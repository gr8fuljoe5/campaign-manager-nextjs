import MomentUtils from '@date-io/moment';
import { IconButton, InputAdornment } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DatePickerComponent = props => {
	const [selectedDate, handleDateChange] = useState(props.selectedDate);
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<DatePicker
				variant="inline"
				format="MM/DD/YY"
				margin="normal"
				id="date-picker-inline"
				value={selectedDate}
				onChange={handleDateChange}
				clearable
				autoOk
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton>
								<TodayIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
				{...props}
			/>
		</MuiPickersUtilsProvider>
	);
};

DatePickerComponent.propTypes = {
	selectedDate: PropTypes.string,
};

export default DatePickerComponent;
