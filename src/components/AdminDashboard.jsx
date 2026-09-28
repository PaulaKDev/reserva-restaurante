import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function AdminDashboard() {
  const { reservations, cancelReservation } = useBooking();

  return (
    <div className="admin-card">
      <h2>⚙️ Panel de Gestión del Restaurante</h2>
      <p>Gestión de reservas en tiempo real.</p>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID Mesa</th>
            <th>Cliente</th>
            <th>Teléfono</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Personas</th>
            <th>Notas</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length === 0 ? (
            <tr><td colSpan="8" style={{ textAlign: 'center' }}>No hay reservas activas.</td></tr>
          ) : (
            reservations.map((res) => (
              <tr key={res.id}>
                <td><strong>{res.tableId}</strong></td>
                <td>{res.name}</td>
                <td>{res.phone}</td>
                <td>{res.date}</td>
                <td>{res.time}</td>
                <td>{res.guests}</td>
                <td>{res.notes || '-'}</td>
                <td>
                  <button onClick={() => cancelReservation(res.id)} className="btn-delete">
                    Cancelar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}