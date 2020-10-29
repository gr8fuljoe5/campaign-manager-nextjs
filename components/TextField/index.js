import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';

const CampaignTextField = props => {
	return (
		<TextField
			id="outlined-basic"
			variant="outlined"
			defaultValue={props.value}
			inputProps={{ 'aria-label': props.ariaLabel || '' }}
			{...props}
		/>
	);
};

CampaignTextField.propTypes = {
	value: PropTypes.string,
};

export default CampaignTextField;
