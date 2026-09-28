import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedZone, setSelectedZone] = useState('salon');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('21:00');
  const [guests, setGuests] = useState(2);
  const [selectedTable, setSelectedTable] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem('app_restaurant_reservations');
    return saved ? JSON.parse(saved) : [
      { id: 'res-1', tableId: 'T-01', date: new Date().toISOString().split('T')[0], time: '21:00', name: 'Juan Pérez', phone: '600112233', guests: 2, status: 'confirmada' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('app_restaurant_reservations', JSON.stringify(reservations));
  }, [reservations]);

  const getTableStatus = (tableId) => {
    const exists = reservations.find(
      (r) => r.tableId === tableId && r.date === selectedDate && r.time === selectedTime && r.status !== 'cancelada'
    );
    return exists ? 'ocupada' : 'disponible';
  };

  const addReservation = (bookingData) => {
    const newReservation = {
      id: `res-${Date.now()}`,
      tableId: selectedTable.id,
      date: selectedDate,
      time: selectedTime,
      guests,
      status: 'confirmada',
      ...bookingData,
    };
    setReservations((prev) => [...prev, newReservation]);
    setIsModalOpen(false);
    setSelectedTable(null);
  };

  const cancelReservation = (id) => {
    setReservations((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <BookingContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        selectedZone,
        setSelectedZone,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        guests,
        setGuests,
        selectedTable,
        setSelectedTable,
        isModalOpen,
        setIsModalOpen,
        reservations,
        getTableStatus,
        addReservation,
        cancelReservation,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);