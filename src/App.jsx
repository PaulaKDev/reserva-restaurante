import React from 'react';
import { useBooking } from './context/BookingContext';
import Header from './components/Header';
import RestaurantMap from './components/RestaurantMap';
import PaymentCheckout from './components/PaymentCheckout';
import StaffMobileView from './components/StaffMobileView';
import ManagerDashboard from './components/ManagerDashboard';

export default function App() {
  const { viewMode, currentStep, setCurrentStep } = useBooking();

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {viewMode === 'client' && (
          <div className="client-grid">
            {currentStep === 'map' ? (
              <>
                <RestaurantMap />
                <div className="card-panel">
                  <h3 className="font-serif">Resumen de tu selección</h3>
                  <p className="selection-summary-text">
                    Has seleccionado la Mesa T6 en la Terraza.
                  </p>
                  <button className="btn-primary" onClick={() => setCurrentStep('checkout')}>
                    Continuar al pago de fianza ➔
                  </button>
                </div>
              </>
            ) : (
              <PaymentCheckout />
            )}
          </div>
        )}

        {viewMode === 'staff_mobile' && <StaffMobileView />}
        {viewMode === 'manager_pc' && <ManagerDashboard />}
      </main>
    </div>
  );
}