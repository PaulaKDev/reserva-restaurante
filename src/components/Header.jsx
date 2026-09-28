import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function Header() {
  const { isAdmin, setIsAdmin } = useBooking();

  return (
    <header className="app-header">
      <h2>🍽️ GastroMap Studio</h2>
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className={`toggle-admin-btn ${isAdmin ? 'admin-mode' : 'client-mode'}`}
      >
        {isAdmin ? '🔴 Cambiar a Vista Cliente' : '⚙️ Modo Administrador / Camarero'}
      </button>
    </header>
  );
}