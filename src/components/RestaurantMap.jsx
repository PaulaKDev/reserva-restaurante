import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function RestaurantMap() {
  const { tablesStatus, selectedTable, setSelectedTable } = useBooking();

  const renderTablesForZone = (zoneId) => {
    return tablesStatus.filter(t => t.zone === zoneId).map((table) => {
      const isSelected = selectedTable?.id === table.id;
      
      let statusClass = 'table-available';
      if (table.status === 'ocupada') {
        statusClass = 'table-occupied';
      } else if (isSelected) {
        statusClass = 'table-selected';
      }

      return (
        <g 
          key={table.id} 
          onClick={() => table.status !== 'ocupada' && setSelectedTable(table)}
          className={`table-group ${statusClass} ${table.status !== 'ocupada' ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        >
          {table.shape === 'circle' ? (
            <circle cx={table.x} cy={table.y} r={table.radius} className="table-shape" />
          ) : (
            <rect x={table.x} y={table.y} width={table.width} height={table.height} rx="10" className="table-shape" />
          )}
          <text 
            x={table.shape === 'circle' ? table.x : table.x + table.width / 2} 
            y={table.shape === 'circle' ? table.y - 2 : table.y + table.height / 2 - 2} 
            textAnchor="middle" 
            className="table-text-id"
          >
            {table.id}
          </text>
          <text 
            x={table.shape === 'circle' ? table.x : table.x + table.width / 2} 
            y={table.shape === 'circle' ? table.y + 12 : table.y + table.height / 2 + 10} 
            textAnchor="middle" 
            className="table-text-seats"
          >
            {table.seats} pers.
          </text>
        </g>
      );
    });
  };

  return (
    <div className="card-panel">
      <h2 className="font-serif card-panel-title-center">Elige tu mesa</h2>
      
      <div className="zone-box salon">
        <span className="zone-title">Salón Interior</span>
        <svg height="220" viewBox="0 0 360 220" className="map-svg-element">
          {renderTablesForZone('salon')}
        </svg>
      </div>

      <div className="zone-box terraza">
        <span className="zone-title">Terraza · Vista al jardín</span>
        <svg height="130" viewBox="0 0 360 130" className="map-svg-element">
          {renderTablesForZone('terraza')}
        </svg>
      </div>

      {selectedTable && (
        <div className="selected-info-box">
          <p className="selected-info-title">Mesa {selectedTable.id} · {selectedTable.seats} personas</p>
          <p className="selected-info-text">{selectedTable.description || 'Zona tranquila'}</p>
        </div>
      )}
    </div>
  );
}