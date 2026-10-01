// src/components/ManagerDashboard.jsx

import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function ManagerDashboard() {
  const { tablesStatus } = useBooking();

  const occupiedCount = tablesStatus.filter(t => t.status === 'ocupada').length;
  const occupancyPercentage = Math.round((occupiedCount / tablesStatus.length) * 100);

  return (
    <div className="map-card">
      <h2 className="font-serif">Dashboard de Gerencia (PC / Tablet)</h2>
      
      <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem 0' }}>
        <div style={{ flex: 1, background: '#F3EFEA', padding: '1rem', borderRadius: '12px' }}>
          <h4>% Ocupación actual</h4>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-terracota)' }}>{occupancyPercentage}%</p>
        </div>
        <div style={{ flex: 1, background: '#F3EFEA', padding: '1rem', borderRadius: '12px' }}>
          <h4>Mesas Ocupadas</h4>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{occupiedCount} / {tablesStatus.length}</p>
        </div>
      </div>
    </div>
  );
}