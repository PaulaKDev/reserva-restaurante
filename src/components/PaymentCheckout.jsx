import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function PaymentCheckout() {
  const { restaurantInfo, guests, setCurrentStep } = useBooking();

  const costPerPerson = restaurantInfo.avgCostPerPerson;
  const depositPerPerson = costPerPerson * restaurantInfo.depositPercentage;
  const totalDeposit = depositPerPerson * guests;

  return (
    <div className="card-panel">
      <h2 className="font-serif card-panel-title">Revisar y pagar</h2>
      
      <div className="breakdown-box">
        <h3 className="font-serif breakdown-title">Desglose transparente</h3>
        <div className="breakdown-row">
          <span>Consumo medio estimado:</span>
          <span>{costPerPerson.toFixed(2)} € / pers.</span>
        </div>
        <div className="breakdown-row">
          <span>Reserva (15% × {costPerPerson.toFixed(2)} €):</span>
          <span>{depositPerPerson.toFixed(2)} € / pers.</span>
        </div>
        <div className="breakdown-row">
          <span>{guests} comensales × {depositPerPerson.toFixed(2)} €:</span>
          <span>{totalDeposit.toFixed(2)} €</span>
        </div>
        <hr className="breakdown-divider" />
        <div className="breakdown-row total">
          <span>Total a pagar ahora:</span>
          <span className="total-price">{totalDeposit.toFixed(2)} €</span>
        </div>
      </div>

      <p className="payment-note">
        Este importe se descontará íntegramente de tu cuenta final en el restaurante.
      </p>

      <button className="btn-primary" onClick={() => alert('🎉 ¡Reserva realizada con éxito!')}>
        Pagar {totalDeposit.toFixed(2)} € y reservar 🔒
      </button>
      
      <button className="btn-link" onClick={() => setCurrentStep('map')}>
        Volver al mapa
      </button>
    </div>
  );
}