// src/context/useBooking.js

import { useContext } from 'react';
import { BookingContext } from './BookingContext';

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking debe usarse dentro de un BookingProvider');
  }
  return context;
};