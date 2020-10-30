import { createStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';
import { SUCCESS } from '../../constants/responses';
import {
  SUCCESS_TITLE,
  ERROR_TITLE,
  SUCCESS_DESCRIPTION,
  ERROR_DESCRIPTION,
} from '../../constants/dialog_content';

import CampaignButton from '../Button';

const useStyles = makeStyles(() =>
  createStyles({
    dialogButton: {
      width: '100%',
    },
  })
);

const AlertDialog = props => {
  const classes = useStyles();
  const { response, closeDialog, clearCampaign } = props;
  const handleClose = () => {
    closeDialog();
    if (response.status === SUCCESS) {
      clearCampaign();
    }
  };

  const title = response.status === SUCCESS ? SUCCESS_TITLE : ERROR_TITLE;
  const description =
    response.status === SUCCESS ? SUCCESS_DESCRIPTION : ERROR_DESCRIPTION;

  return (
    <div>
      <Dialog
        open={props.openDialog}
        onClose={handleClose}
        aria-labelledby={title}
        aria-describedby={description}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
          <CampaignButton
            onClick={handleClose}
            color="primary"
            autoFocus
            className={classes.dialogButton}>
            Close
          </CampaignButton>
        </DialogContent>
      </Dialog>
    </div>
  );
};

AlertDialog.propTypes = {
  openDialog: PropTypes.bool,
  response: PropTypes.object,
  closeDialog: PropTypes.func,
  clearCampaign: PropTypes.func,
};

export default AlertDialog;
