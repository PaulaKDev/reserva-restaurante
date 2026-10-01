import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { BookingProvider } from './context/BookingContext';
import { router } from './app/routes';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider>
      <RouterProvider router={router} />
    </BookingProvider>
  </React.StrictMode>
);