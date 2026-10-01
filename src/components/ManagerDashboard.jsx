import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function ManagerDashboard() {
  const { tablesStatus } = useBooking();

  const occupiedCount = tablesStatus.filter(t => t.status === 'ocupada').length;
  const occupancyPercentage = Math.round((occupiedCount / tablesStatus.length) * 100);

  return (
    <div className="card-panel">
      <h2 className="font-serif">Dashboard de Gerencia (PC / Tablet)</h2>
      
      <div className="dashboard-stats">
        <div className="stat-box">
          <h4>% Ocupación actual</h4>
          <p className="stat-value-accent">{occupancyPercentage}%</p>
        </div>
        <div className="stat-box">
          <h4>Mesas Ocupadas</h4>
          <p className="stat-value-dark">{occupiedCount} / {tablesStatus.length}</p>
        </div>
      </div>
    </div>
  );
}