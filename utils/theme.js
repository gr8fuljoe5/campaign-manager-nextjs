import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(168, 82, 222)',
    },
    secondary: {
      main: 'rgb(66, 201, 84)',
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        width: '100%',
      },
    },
    MuiButton: {
      containedPrimary: {
        border: '1px solid #666',
      },
    },
  },
});

export default theme;
