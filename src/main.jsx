import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BookingProvider } from './context/BookingContext';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider>
      <App />
    </BookingProvider>
  </React.StrictMode>
);