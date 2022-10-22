import { createTheme } from '@mui/material';

export const AppBar = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          boxShadow: 'none',
        },
      },
    },
  },
});
