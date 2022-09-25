import { Box } from '@mui/material';
import { Container } from '@mui/material';
import React from 'react';
import AppBar from './AppBar';

export default function DefaultLayout({ children }) {
  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://res.cloudinary.com/dominic13/image/upload/v1663605525/RealEstate/BackLandingPage.jpg)',
        height: '100vh',
      }}
    >
      <AppBar />
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
}
