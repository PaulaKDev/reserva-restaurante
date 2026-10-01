// src/context/BookingContext.jsx

import React, { createContext, useContext, useState } from 'react';
import { TABLES, RESTAURANT_INFO } from '../data/mockLayout';

export const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking debe usarse dentro de un BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('client');
  const [selectedDate, setSelectedDate] = useState('2026-10-17');
  const [selectedTime, setSelectedTime] = useState('21:00');
  const [guests, setGuests] = useState(2);
  const [selectedTable, setSelectedTable] = useState(TABLES.find(t => t.id === 'T6'));
  const [currentStep, setCurrentStep] = useState('detail'); // 'detail' | 'map' | 'checkout'

  const [tablesStatus, setTablesStatus] = useState(TABLES);

  const updateTableStatus = (tableId, newStatus) => {
    setTablesStatus((prev) =>
      prev.map((t) => (t.id === tableId ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <BookingContext.Provider
      value={{
        viewMode,
        setViewMode,
        restaurantInfo: RESTAURANT_INFO,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        guests,
        setGuests,
        selectedTable,
        setSelectedTable,
        currentStep,
        setCurrentStep,
        tablesStatus,
        updateTableStatus,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};