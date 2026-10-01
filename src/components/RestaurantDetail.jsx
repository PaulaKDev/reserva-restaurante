import React from 'react';
import { useBooking } from '../context/useBooking';

const formatDate = (date) => {
  const formattedDate = new Date(`${date}T12:00:00`);

  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).format(formattedDate);
};

export default function RestaurantDetail() {
  const {
  restaurantInfo,
  selectedDate,
  selectedTime,
  guests,
  setCurrentStep
} = useBooking();

  return (
    <div className="card-panel">
      {/* 1. Imagen Superior / Galería */}
      <div className="hero-container">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" 
          alt={restaurantInfo.name}
          className="hero-image"
        />
        <div className="hero-overlay-top">
          <button className="hero-action-btn" aria-label="Volver">←</button>
          <div className="hero-actions-right">
            <button className="hero-action-btn" aria-label="Compartir">↗</button>
            <button className="hero-action-btn" aria-label="Favorito">♡</button>
          </div>
        </div>
        <div className="hero-badge-count">
          🖼️ 1 / 12
        </div>
      </div>

      {/* 2. Cabecera e Información del Local */}
      <p className="restaurant-meta-category">
        MEDITERRÁNEA CONTEMPORÁNEA · {restaurantInfo.priceRange}
      </p>
      
      <div className="restaurant-title-row">
        <h1 className="font-serif restaurant-title-name">{restaurantInfo.name}</h1>
        <div className="rating-badge">
          ⭐ {restaurantInfo.rating} <span className="selected-info-text">({restaurantInfo.reviewsCount})</span>
        </div>
      </div>

      <p className="restaurant-address">
        📍 {restaurantInfo.address}
      </p>

      {/* 3. Sección Tu Reserva */}
      <h3 className="font-serif section-title-booking">Tu reserva</h3>

      <div className="booking-selectors-grid">
        <div className="selector-card">
          <div className="selector-label-row">
            <span className="selector-label">📅 FECHA</span>
            <span className="selector-label">∨</span>
          </div>
          <span className="selector-value">
            {formatDate(selectedDate)}
          </span>
        </div>

        <div className="selector-card">
          <div className="selector-label-row">
            <span className="selector-label">⏰ HORA</span>
            <span className="selector-label">∨</span>
          </div>
          <span className="selector-value">{selectedTime}</span>
        </div>

        <div className="selector-card">
          <div className="selector-label-row">
            <span className="selector-label">👥 PERSONAS</span>
            <span className="selector-label">∨</span>
          </div>
          <span className="selector-value">{guests} comensales</span>
        </div>
      </div>

      {/* 4. Estado de Disponibilidad */}
      <div className="availability-banner">
        <div className="availability-info">
          <div className="check-circle-icon">✓</div>
          <div>
            <p className="availability-status-title">Disponible</p>
            <p className="availability-status-details">
              {formatDate(selectedDate)} · {selectedTime} · {guests} personas · Terraza
            </p>
          </div>
        </div>
        <span className="selector-label">❯</span>
      </div>

      {/* 5. Información de Política de Cancelación */}
      <div className="policy-banner">
        🛡 Reserva flexible · Cancela sin coste hasta 6 h antes.
      </div>

      {/* 6. Botón Principal CTA */}
      <button className="btn-cta-terracota" onClick={() => setCurrentStep('map')}>
        Elegir mesa en el salón ➔
      </button>
    </div>
  );
}