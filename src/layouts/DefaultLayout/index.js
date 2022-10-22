import { Box } from '@mui/material';
import { Divider } from '@mui/material';
import { Container } from '@mui/material';
import React from 'react';
import AppBar from './AppBar';

export default function DefaultLayout({ children }) {
  return (
    <Box bgcolor="#ebebeb">
      <AppBar />
      <Divider />
      <Container maxWidth="md" sx={{ py: 2, minHeight: 'calc(100vh - 65px)' }}>
        {children}
      </Container>
    </Box>
  );
}
