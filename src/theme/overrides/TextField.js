import { createTheme } from '@mui/material';
import React from 'react';

export const TextField = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
