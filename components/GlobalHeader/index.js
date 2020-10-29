import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    AppBar: {
      flexGrow: 1,
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
    title: {
      fontSize: theme.typography.h3.fontSize,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.AppBar}>
      <Toolbar>
        <Typography variant="h1" className={classes.title}>
          ABC Company
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
