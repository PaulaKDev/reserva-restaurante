// src/components/RestaurantMap.jsx

import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function RestaurantMap() {
  const { tablesStatus, selectedTable, setSelectedTable } = useBooking();

  // Paleta exacta de Figma
  const colors = {
    disponibleFill: '#FFFFFF',
    disponibleStroke: '#7A9A95',
    ocupadaFill: '#E4D5C7',
    ocupadaText: '#6B5B52',
    seleccionadaFill: '#C17254',
    seleccionadaText: '#FFFFFF',
  };

  const renderTablesForZone = (zoneId) => {
    return tablesStatus.filter(t => t.zone === zoneId).map((table) => {
      const isSelected = selectedTable?.id === table.id;
      let fill = colors.disponibleFill;
      let stroke = colors.disponibleStroke;
      let textColor = '#2B231F';

      if (table.status === 'ocupada') {
        fill = colors.ocupadaFill;
        stroke = 'transparent';
        textColor = colors.ocupadaText;
      } else if (isSelected) {
        fill = colors.seleccionadaFill;
        stroke = 'transparent';
        textColor = colors.seleccionadaText;
      }

      return (
        <g
          key={table.id}
          onClick={() => table.status !== 'ocupada' && setSelectedTable(table)}
          style={{ cursor: table.status !== 'ocupada' ? 'pointer' : 'not-allowed' }}
        >
          {table.shape === 'circle' ? (
            <circle cx={table.x} cy={table.y} r={table.radius} fill={fill} stroke={stroke} strokeWidth="2" />
          ) : (
            <rect x={table.x} y={table.y} width={table.width} height={table.height} rx="10" fill={fill} stroke={stroke} strokeWidth="2" />
          )}
          <text
            x={table.shape === 'circle' ? table.x : table.x + table.width / 2} 
            y={table.shape === 'circle' ? table.y - 2 : table.y + table.height / 2 - 2} 
            textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="13"
          >
            {table.id}
          </text>
          <text
            x={table.shape === 'circle' ? table.x : table.x + table.width / 2} 
            y={table.shape === 'circle' ? table.y + 12 : table.y + table.height / 2 + 10} 
            textAnchor="middle" fill={textColor} fontSize="10"
          >
            {table.seats} pers.
          </text>
        </g>
      );
    });
  };

  return (
    <div className="map-card">
      <h2 className="font-serif" style={{ textAlign: 'center', marginBottom: '1rem' }}>Elige tu mesa</h2>

      {/* Contenedor Salón Interior */}
      <div className="zone-box salon">
        <span className="zone-title">SALÓN INTERIOR</span>
        <svg width="100%" height="220" viewBox="0 0 360 220">
          {renderTablesForZone('salon')}
        </svg>
      </div>

      {/* Contenedor Terraza / Jardín */}
      <div className="zone-box terraza">
        <span className="zone-title">TERRAZA · VISTA AL JARDÍN</span>
        <svg width="100%" height="130" viewBox="0 0 360 130">
          {renderTablesForZone('terraza')}
        </svg>
      </div>

      {selectedTable && (
        <div style={{ background: '#F3EFEA', padding: '1rem', borderRadius: '12px', marginTop: '1rem' }}>
          <strong>Mesa {selectedTable.id} · {selectedTable.seats} personas</strong>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {selectedTable.description || 'Zona tranquila'}
          </p>
        </div>
      )}
    </div>
  );
}