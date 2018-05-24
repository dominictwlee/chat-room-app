import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'utils/materialThemes';

const styles = {
  button: {
    'margin-left': '1rem',
  },
};

const SendButton = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <Button variant="raised" color="secondary" className={classes.button}>
      Send
    </Button>
  </MuiThemeProvider>
);

export default withStyles(styles)(SendButton);
