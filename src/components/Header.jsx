import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function Header() {
  const { viewMode, setViewMode, restaurantInfo } = useBooking();

  return (
    <header className="app-header">
      <h2 className="font-serif">{restaurantInfo.name}</h2>
      <div className="mode-selector">
        <button 
          className={`mode-btn ${viewMode === 'client' ? 'active' : ''}`}
          onClick={() => setViewMode('client')}
        >
          📱 Cliente
        </button>
        <button 
          className={`mode-btn ${viewMode === 'staff_mobile' ? 'active' : ''}`}
          onClick={() => setViewMode('staff_mobile')}
        >
          📲 Staff (Móvil)
        </button>
        <button 
          className={`mode-btn ${viewMode === 'manager_pc' ? 'active' : ''}`}
          onClick={() => setViewMode('manager_pc')}
        >
          💻 Manager (PC)
        </button>
      </div>
    </header>
  );
}