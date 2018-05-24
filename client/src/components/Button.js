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

const BasicButton = ({ classes, size, children }) => (
  <MuiThemeProvider theme={theme}>
    <Button variant="raised" color="secondary" size={size} className={classes.button}>
      {children}
    </Button>
  </MuiThemeProvider>
);

export default withStyles(styles)(BasicButton);
