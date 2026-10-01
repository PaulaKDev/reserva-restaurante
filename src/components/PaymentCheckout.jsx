// src/components/PaymentCheckout.jsx

import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function PaymentCheckout() {
  const { restaurantInfo, selectedTable, guests, setCurrentStep } = useBooking();

  const costPerPerson = restaurantInfo.avgCostPerPerson;
  const depositPerPerson = costPerPerson * restaurantInfo.depositPercentage;
  const totalDeposit = depositPerPerson * guests;

  return (
    <div className="map-card">
      <h2 className="font-serif" style={{ marginBottom: '1rem' }}>Revisar y pagar</h2>
      
      {/* Tarjeta con desglose transparente */}
      <div style={{ background: '#F3EFEA', padding: '1.2rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
        <h3 className="font-serif" style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>Desglose transparente</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
          <span>Consumo medio estimado:</span>
          <span>{costPerPerson.toFixed(2)} € / pers.</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
          <span>Reserva (15% × {costPerPerson.toFixed(2)} €):</span>
          <span>{depositPerPerson.toFixed(2)} € / pers.</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
          <span>{guests} comensales × {depositPerPerson.toFixed(2)} €:</span>
          <span>{totalDeposit.toFixed(2)} €</span>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #E4D5C7', margin: '0.8rem 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
          <span>Total a pagar ahora:</span>
          <span style={{ fontSize: '1.2rem', color: 'var(--accent-terracota)' }}>{totalDeposit.toFixed(2)} €</span>
        </div>
      </div>

      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Este importe se descontará íntegramente de tu cuenta final en el restaurante.
      </p>

      <button className="btn-primary" onClick={() => alert('🎉 ¡Reserva realizada con éxito!')}>
        Pagar {totalDeposit.toFixed(2)} € y reservar 🔒
      </button>
      
      <button
        style={{ width: '100%', background: 'transparent', border: 'none', marginTop: '1rem', cursor: 'pointer', color: 'var(--text-muted)' }}
        onClick={() => setCurrentStep('map')}
      >
        Volver al mapa
      </button>
    </div>
  );
}