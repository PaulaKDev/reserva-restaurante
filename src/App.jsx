import React from 'react';
import { useBooking } from './context/BookingContext';
import Header from './components/Header';
import Filters from './components/Filters';
import RestaurantMap from './components/RestaurantMap';
import BookingModal from './components/BookingModal';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const { isAdmin } = useBooking();

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {isAdmin ? (
          <AdminDashboard />
        ) : (
          <>
            <Filters />
            <RestaurantMap />
            <BookingModal />
          </>
        )}
      </main>
    </div>
  );
}