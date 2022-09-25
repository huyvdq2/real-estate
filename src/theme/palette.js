import { createTheme } from '@mui/material';
import React from 'react';

export const palette = createTheme({
  palette: {
    primary: {
      main: '#2cade4',
      dark: '#0491d1',
      light: '#7fceef',
    },
    secondary: {
      main: '#f78832',
      dark: '#e4632c',
      light: '#ffa339',
    },
    tonalOffset: 0.3,
    contrastThreshold: 0.3,
  },
});
