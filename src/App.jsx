import React from 'react';
import { useBooking } from './context/BookingContext';
import Header from './components/Header';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantMap from './components/RestaurantMap';
import PaymentCheckout from './components/PaymentCheckout';
import StaffMobileView from './components/StaffMobileView';
import ManagerDashboard from './components/ManagerDashboard';

export default function App() {
  const { viewMode, currentStep } = useBooking();

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {viewMode === 'client' && (
          <div className="client-grid">
            {currentStep === 'detail' && <RestaurantDetail />}
            {currentStep === 'map' && <RestaurantMap />}
            {currentStep === 'checkout' && <PaymentCheckout />}
          </div>
        )}

        {viewMode === 'staff_mobile' && <StaffMobileView />}
        {viewMode === 'manager_pc' && <ManagerDashboard />}
      </main>
    </div>
  );
}