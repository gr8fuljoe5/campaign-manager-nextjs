import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';

const CheckboxComponent = props => {
	return (
		<Checkbox
			color="primary"
			{...props}
			inputProps={{
				role: 'checkbox',
				'aria-label': 'campaign-checkbox',
			}}
		/>
	);
};

export default CheckboxComponent;
