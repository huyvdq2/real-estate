import { createTheme } from '@mui/material';
import React from 'react';

export const Button = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
