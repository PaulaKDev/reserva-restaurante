// src/data/mockLayout.js

export const RESTAURANT_INFO = {
  name: 'Casa Mar',
  subtitle: 'Cocina de costa',
  cuisine: 'Mediterránea',
  priceRange: '€€€',
  rating: 4.8,
  reviewsCount: 326,
  address: 'Calle del Olivar, 18 · Madrid',
  avgCostPerPerson: 50.0,
  depositPercentage: 0.15, // 15% fianza por persona
};

export const ZONES = [
  { id: 'salon', name: 'Salón Interior' },
  { id: 'terraza', name: 'Terraza · Vista al jardín' },
];

export const TABLES = [
  // SALÓN INTERIOR
  { id: 'S1', zone: 'salon', seats: 2, shape: 'circle', x: 80, y: 70, radius: 28, status: 'disponible' },
  { id: 'S2', zone: 'salon', seats: 2, shape: 'circle', x: 180, y: 70, radius: 28, status: 'ocupada' },
  { id: 'S3', zone: 'salon', seats: 4, shape: 'rectangle', x: 260, y: 50, width: 70, height: 45, status: 'disponible' },
  { id: 'S4', zone: 'salon', seats: 4, shape: 'rectangle', x: 80, y: 150, width: 75, height: 45, status: 'ocupada' },
  { id: 'S5', zone: 'salon', seats: 2, shape: 'circle', x: 210, y: 170, radius: 28, status: 'disponible' },

  // TERRAZA / VISTA AL JARDÍN
  { id: 'T5', zone: 'terraza', seats: 4, shape: 'rectangle', x: 50, y: 50, width: 75, height: 45, status: 'disponible' },
  { id: 'T6', zone: 'terraza', seats: 2, shape: 'circle', x: 180, y: 70, radius: 28, status: 'disponible', description: 'Terraza · Junto al jardín · Tranquila' },
  { id: 'T7', zone: 'terraza', seats: 4, shape: 'rectangle', x: 260, y: 50, width: 75, height: 45, status: 'ocupada' },
];