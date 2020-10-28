import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      color: theme.palette.primary,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Media Math
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
