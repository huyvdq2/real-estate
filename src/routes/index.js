import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { LoadingScreen } from '../components/LoadingScreen';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);
