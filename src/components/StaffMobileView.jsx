import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function StaffMobileView() {
  const { tablesStatus, updateTableStatus } = useBooking();

  return (
    <div className="card-panel">
      <h2 className="font-serif">Control de Sala (Camareros)</h2>
      <p className="card-subtitle">
        Toca una mesa para cambiar su estado en tiempo real.
      </p>

      <div className="staff-grid">
        {tablesStatus.map((table) => (
          <div key={table.id} className={`staff-card ${table.status === 'ocupada' ? 'occupied' : ''}`}>
            <strong>Mesa {table.id}</strong>
            <p className="staff-status-text">{table.status.toUpperCase()}</p>
            <button
              className="btn-action-sm"
              onClick={() => updateTableStatus(table.id, table.status === 'ocupada' ? 'disponible' : 'ocupada')}
            >
              Cambiar Estado
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}