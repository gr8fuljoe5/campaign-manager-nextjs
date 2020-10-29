import TextField from '@material-ui/core/TextField';
import React from 'react';

const CampaignTextField = (props) => {
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

export default CampaignTextField;
