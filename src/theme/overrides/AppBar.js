import { createTheme } from '@mui/material';
import React from 'react';
import { palette } from '../palette';

export const AppBar = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
  },
});
