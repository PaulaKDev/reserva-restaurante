export const ZONES = [
  { id: 'salon', name: 'Salón Principal', icon: '🍷' },
  { id: 'terraza', name: 'Terraza Exterior', icon: '🌿' },
  { id: 'barra', name: 'Barra & Cintas', icon: '🍸' },
];

export const TABLES = [
  // Salón Principal
  { id: 'T-01', zone: 'salon', name: 'Mesa 1 (Ventana)', minSeats: 2, maxSeats: 2, shape: 'circle', x: 80, y: 80, radius: 30, tags: ['ventana', 'romantica'] },
  { id: 'T-02', zone: 'salon', name: 'Mesa 2 (Ventana)', minSeats: 2, maxSeats: 4, shape: 'rectangle', x: 200, y: 70, width: 80, height: 50, tags: ['ventana'] },
  { id: 'T-03', zone: 'salon', name: 'Mesa Central 3', minSeats: 4, maxSeats: 6, shape: 'rectangle', x: 80, y: 200, width: 90, height: 60, tags: ['amplia'] },
  { id: 'T-04', zone: 'salon', name: 'Mesa Central 4', minSeats: 2, maxSeats: 4, shape: 'circle', x: 240, y: 210, radius: 35, tags: ['tranquila'] },
  { id: 'T-05', zone: 'salon', name: 'Booth VIP 5', minSeats: 4, maxSeats: 8, shape: 'rectangle', x: 380, y: 120, width: 100, height: 70, tags: ['vip', 'accesible'] },

  // Terraza Exterior
  { id: 'T-06', zone: 'terraza', name: 'Jardín 1', minSeats: 2, maxSeats: 2, shape: 'circle', x: 100, y: 100, radius: 28, tags: ['jardin'] },
  { id: 'T-07', zone: 'terraza', name: 'Jardín 2', minSeats: 2, maxSeats: 4, shape: 'rectangle', x: 220, y: 90, width: 80, height: 50, tags: ['sombrilla'] },
  { id: 'T-08', zone: 'terraza', name: 'Piscina VIP', minSeats: 4, maxSeats: 6, shape: 'circle', x: 150, y: 220, radius: 40, tags: ['vip', 'vistas'] },

  // Barra
  { id: 'T-09', zone: 'barra', name: 'Barra Alta 1', minSeats: 1, maxSeats: 2, shape: 'circle', x: 100, y: 150, radius: 22, tags: ['rapida'] },
  { id: 'T-10', zone: 'barra', name: 'Barra Alta 2', minSeats: 1, maxSeats: 2, shape: 'circle', x: 180, y: 150, radius: 22, tags: ['rapida'] },
  { id: 'T-11', zone: 'barra', name: 'Barra Alta 3', minSeats: 1, maxSeats: 2, shape: 'circle', x: 260, y: 150, radius: 22, tags: ['rapida'] },
];