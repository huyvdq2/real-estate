import { Divider, Grid, Pagination, Paper } from '@mui/material';
import React from 'react';
import { CustomLink } from './components/CustomLink';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import { Products } from './pages/Home/Products';

function App() {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
}

export default App;
