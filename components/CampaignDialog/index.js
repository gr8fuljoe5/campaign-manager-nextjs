import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useEffect } from "react";

const AlertDialog = (props) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(props.openDialog);
    console.log("use effect");
  });

  const handleClose = () => {
    console.log("handleClose", open);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Success!!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            All Selected Creatives have been successfully uploaded
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
