import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     title: {
//       flexGrow: 1,
//       color: theme.palette.secondary,
//     },
//   })
// );

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Media Math</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
