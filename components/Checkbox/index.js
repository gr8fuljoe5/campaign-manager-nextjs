import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';
import PropTypes from 'prop-types';

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

CheckboxComponent.propTypes = {};

export default CheckboxComponent;
