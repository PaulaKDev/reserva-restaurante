// src/components/StaffMobileView.jsx

import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function StaffMobileView() {
  const { tablesStatus, updateTableStatus } = useBooking();

  return (
    <div className="map-card">
      <h2 className="font-serif" style={{ marginBottom: '0.5rem' }}>Control de Sala (Camareros)</h2>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Toca una mesa para cambiar su estado en tiempo real.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '1rem' }}>
        {tablesStatus.map((table) => (
          <div 
            key={table.id}
            style={{
              padding: '1rem',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              backgroundColor: table.status === 'ocupada' ? '#E4D5C7' : '#FFFFFF',
              textAlign: 'center'
            }}
          >
            <strong>Mesa {table.id}</strong>
            <p style={{ fontSize: '0.8rem', margin: '0.4rem 0' }}>{table.status.toUpperCase()}</p>
            <button
              style={{
                padding: '0.4rem 0.6rem',
                fontSize: '0.75rem',
                borderRadius: '6px',
                border: 'none',
                background: 'var(--accent-terracota)',
                color: '#fff',
                cursor: 'pointer'
              }}
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