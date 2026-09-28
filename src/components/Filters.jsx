import React from 'react';
import { useBooking } from '../context/BookingContext';
import { ZONES } from '../data/mockLayout';

export default function Filters() {
  const {
    selectedZone, setSelectedZone,
    selectedDate, setSelectedDate,
    selectedTime, setSelectedTime,
    guests, setGuests
  } = useBooking();

  return (
    <div className="filters-container">
      <div className="filter-group">
        <label htmlFor="date">📅 Fecha:</label>
        <input
          id="date"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="time">⏰ Turno:</label>
        <select
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="filter-input"
        >
          <option value="13:30">13:30 (Comida)</option>
          <option value="15:00">15:00 (Comida)</option>
          <option value="20:30">20:30 (Cena)</option>
          <option value="21:00">21:00 (Cena)</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="guests">👥 Comensales:</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="filter-input"
        />
      </div>

      <div className="zone-tabs">
        {ZONES.map((zone) => (
          <button
            key={zone.id}
            onClick={() => setSelectedZone(zone.id)}
            className={`zone-tab-btn ${selectedZone === zone.id ? 'active' : ''}`}
          >
            {zone.icon} {zone.name}
          </button>
        ))}
      </div>
    </div>
  );
}