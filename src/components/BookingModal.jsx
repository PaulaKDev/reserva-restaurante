import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';

export default function BookingModal() {
  const { selectedTable, isModalOpen, setIsModalOpen, addReservation, selectedDate, selectedTime, guests } = useBooking();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  if (!isModalOpen || !selectedTable) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addReservation({ name, phone, notes });
    alert(`🎉 ¡Reserva confirmada con éxito para ${name} en la ${selectedTable.name}!`);
    setName('');
    setPhone('');
    setNotes('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Reserva: {selectedTable.name}</h3>
        <p>📅 <strong>Fecha:</strong> {selectedDate} | ⏰ <strong>Hora:</strong> {selectedTime}</p>
        <p>👥 <strong>Comensales:</strong> {guests} personas</p>

        <form onSubmit={handleSubmit} className="booking-form">
          <label htmlFor="name">Nombre Completo:</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="filter-input"
          />

          <label htmlFor="phone">Teléfono de Contacto:</label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="filter-input"
          />

          <label htmlFor="notes">Alergias o Notas Especiales:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="filter-input"
            placeholder="Ej. Cumpleaños, celíacos..."
          />

          <div className="modal-actions">
            <button type="button" onClick={() => setIsModalOpen(false)} className="btn-cancel">Cancelar</button>
            <button type="submit" className="btn-confirm">Confirmar Reserva</button>
          </div>
        </form>
      </div>
    </div>
  );
}