import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import React from "react";
import { SUCCESS } from "../../constants/responses";
import CampaignButton from "../Button";

const AlertDialog = (props) => {
  const { response } = props;
  const handleClose = () => {
    props.closeDialog();
  };

  const title =
    response.status === SUCCESS ? "Success!!!" : "There was an error!";
  const description =
    response.status === SUCCESS
      ? "All Selected Creatives have been successfully uploaded"
      : "Please check the console for more information";



      
  return (
    <div>
      <Dialog
        open={props.openDialog}
        onClose={handleClose}
        aria-labelledby={title}
        aria-describedby={description}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
          <CampaignButton
            onClick={handleClose}
            color="primary"
            autoFocus
            style={{ width: "100%" }}
          >
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
};

export default AlertDialog;
