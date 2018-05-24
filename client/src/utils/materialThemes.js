import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[700],
      light: blueGrey[300],
      dark: blueGrey[900],
    },
    secondary: {
      main: teal.A700,
    },
  },
});

export default theme;
