import React from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';

import styles from './SendButton.module.css';
import theme from 'utils/materialThemes';

const SendButton = () => (
  <MuiThemeProvider theme={theme}>
    <Button variant="raised" color="secondary">
      Send
    </Button>
  </MuiThemeProvider>
);

export default SendButton;
