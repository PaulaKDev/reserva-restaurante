import React from 'react';
import { useBooking } from '../context/BookingContext';
import { TABLES } from '../data/mockLayout';

export default function RestaurantMap() {
  const { 
    selectedZone, 
    selectedTable, 
    setSelectedTable, 
    getTableStatus, 
    guests,
    setIsModalOpen 
  } = useBooking();

  const zoneTables = TABLES.filter((t) => t.zone === selectedZone);

  const handleTableClick = (table, status, isCapacityValid) => {
    if (status === 'ocupada' || !isCapacityValid) return;
    setSelectedTable(table);
    setIsModalOpen(true);
  };

  return (
    <div className="map-card">
      <h3>Plano Interactivo - {selectedZone.toUpperCase()}</h3>
      <div className="map-legend">
        <span>🟢 Disponible</span>
        <span>🔴 Ocupada</span>
        <span>🟡 Seleccionada</span>
        <span>⚪ Capacidad insuficiente</span>
      </div>

      <svg width="550" height="350" className="map-svg">
        <rect x="10" y="10" width="530" height="330" rx="15" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2" />
        <text x="30" y="35" fill="#aaa" fontSize="12" fontWeight="bold">ENTRADA / RECEPCIÓN 🚪</text>

        {zoneTables.map((table) => {
          const status = getTableStatus(table.id);
          const isCapacityValid = guests >= table.minSeats && guests <= table.maxSeats;
          const isSelected = selectedTable?.id === table.id;

          let fillColor = '#2ecc71';
          if (status === 'ocupada') fillColor = '#e74c3c';
          if (!isCapacityValid) fillColor = '#bdc3c7';
          if (isSelected) fillColor = '#f1c40f';

          const isClickable = status === 'disponible' && isCapacityValid;

          return (
            <g
              key={table.id}
              onClick={() => handleTableClick(table, status, isCapacityValid)}
              className={`table-node ${isClickable ? 'available' : 'disabled'}`}
            >
              {table.shape === 'circle' ? (
                <circle
                  cx={table.x}
                  cy={table.y}
                  r={table.radius}
                  fill={fillColor}
                  stroke="#333"
                  strokeWidth={isSelected ? 3 : 1}
                />
              ) : (
                <rect
                  x={table.x}
                  y={table.y}
                  width={table.width}
                  height={table.height}
                  rx="8"
                  fill={fillColor}
                  stroke="#333"
                  strokeWidth={isSelected ? 3 : 1}
                />
              )}
              <text
                x={table.shape === 'circle' ? table.x : table.x + table.width / 2}
                y={table.shape === 'circle' ? table.y + 4 : table.y + table.height / 2 + 4}
                fill="#fff"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                {table.id}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}