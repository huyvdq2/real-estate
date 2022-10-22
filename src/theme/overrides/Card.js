import React from 'react';
import { createTheme } from '@mui/material';

export const Card = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8,
        },
      },
    },
  },
});
