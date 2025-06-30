import { Hotel } from 'types/types';

export const fakeHotels: Hotel[] = [
  {
    id: 1,
    name: 'Grand Plaza Hotel & Spa',
    price: 120,
    location: {
      city: 'New York',
      address: '768 5th Avenue, Midtown Manhattan',
      latitude: 40.7614,
      longitude: -73.9776,
    },
    stars: 4,
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9'
    ],
    userRating: 4.5,
    checkIn: {
      from: '15:00',
      to: '23:00',
    },
    checkOut: {
      from: '07:00',
      to: '12:00',
    },
    contact: {
      phoneNumber: '+1 (212) 555-0123',
      email: 'reservations@grandplaza.com',
    },
    currency: 'USD',
  },
  {
    id: 2,
    name: 'Oceanview Resort & Marina',
    price: 185,
    location: {
      city: 'Miami Beach',
      address: '1901 Collins Avenue, South Beach',
      latitude: 25.7617,
      longitude: -80.1918,
    },
    stars: 5,
    gallery: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96'
    ],
    userRating: 4.8,
    checkIn: {
      from: '16:00',
      to: '00:00',
    },
    checkOut: {
      from: '06:00',
      to: '11:00',
    },
    contact: {
      phoneNumber: '+1 (305) 555-0456',
      email: 'info@oceanviewresort.com',
    },
    currency: 'USD',
  },
  {
    id: 3,
    name: 'Mountain Lodge Retreat',
    price: 95,
    location: {
      city: 'Aspen',
      address: '425 Rio Grande Place, Historic District',
      latitude: 39.1911,
      longitude: -106.8175,
    },
    stars: 3,
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6'
    ],
    userRating: 4.2,
    checkIn: {
      from: '15:00',
      to: '22:00',
    },
    checkOut: {
      from: '08:00',
      to: '11:00',
    },
    contact: {
      phoneNumber: '+1 (970) 555-0789',
      email: 'stay@mountainlodge.com',
    },
    currency: 'USD',
  },
  {
    id: 4,
    name: 'Historic Downtown Boutique',
    price: 140,
    location: {
      city: 'Charleston',
      address: '181 Church Street, French Quarter',
      latitude: 32.7767,
      longitude: -79.9311,
    },
    stars: 4,
    gallery: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7'
    ],
    userRating: 4.6,
    checkIn: {
      from: '15:00',
      to: '23:00',
    },
    checkOut: {
      from: '07:00',
      to: '12:00',
    },
    contact: {
      phoneNumber: '+1 (843) 555-0234',
      email: 'concierge@historicboutique.com',
    },
    currency: 'USD',
  },
  {
    id: 5,
    name: 'Silicon Valley Business Hotel',
    price: 220,
    location: {
      city: 'Palo Alto',
      address: '4290 El Camino Real, Stanford Area',
      latitude: 37.4419,
      longitude: -122.1430,
    },
    stars: 4,
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1559508551-44bff1de756b',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461'
    ],
    userRating: 4.3,
    checkIn: {
      from: '15:00',
      to: '00:00',
    },
    checkOut: {
      from: '06:00',
      to: '12:00',
    },
    contact: {
      phoneNumber: '+1 (650) 555-0567',
      email: 'business@siliconvalleyhotel.com',
    },
    currency: 'USD',
  },
  {
    id: 6,
    name: 'Desert Oasis Resort',
    price: 165,
    location: {
      city: 'Scottsdale',
      address: '7575 E Princess Drive, North Scottsdale',
      latitude: 33.4942,
      longitude: -111.9261,
    },
    stars: 5,
    gallery: [
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1',
      'https://images.unsplash.com/photo-1571770095004-6b61b1cf308a',
      'https://images.unsplash.com/photo-1578944032637-f09897c5233d'
    ],
    userRating: 4.7,
    checkIn: {
      from: '16:00',
      to: '23:00',
    },
    checkOut: {
      from: '07:00',
      to: '11:00',
    },
    contact: {
      phoneNumber: '+1 (480) 555-0890',
      email: 'reservations@desertoasis.com',
    },
    currency: 'USD',
  },
  {
    id: 7,
    name: 'Lakeside Inn & Suites',
    price: 85,
    location: {
      city: 'Lake Tahoe',
      address: '955 Emerald Bay Road, South Lake Tahoe',
      latitude: 38.9697,
      longitude: -119.9447,
    },
    stars: 3,
    gallery: [
      'https://images.unsplash.com/photo-1586611292717-f828b167408c',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
      'https://images.unsplash.com/photo-1580977798334-eb3b21ec3c6e'
    ],
    userRating: 4.0,
    checkIn: {
      from: '15:00',
      to: '22:00',
    },
    checkOut: {
      from: '08:00',
      to: '11:00',
    },
    contact: {
      phoneNumber: '+1 (530) 555-0345',
      email: 'info@lakesideinn.com',
    },
    currency: 'USD',
  },
  {
    id: 8,
    name: 'Metropolitan Tower Hotel',
    price: 280,
    location: {
      city: 'Seattle',
      address: '1400 6th Avenue, Downtown',
      latitude: 47.6089,
      longitude: -122.3355,
    },
    stars: 5,
    gallery: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
      'https://images.unsplash.com/photo-1561501900-3701fa6a0864',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427'
    ],
    userRating: 4.9,
    checkIn: {
      from: '15:00',
      to: '00:00',
    },
    checkOut: {
      from: '06:00',
      to: '12:00',
    },
    contact: {
      phoneNumber: '+1 (206) 555-0678',
      email: 'luxury@metropolitantower.com',
    },
    currency: 'USD',
  },
  {
    id: 9,
    name: 'Coastal Breeze Motel',
    price: 65,
    location: {
      city: 'Monterey',
      address: '2042 N Fremont Street, Seaside Area',
      latitude: 36.6002,
      longitude: -121.8947,
    },
    stars: 2,
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96'
    ],
    userRating: 3.5,
    checkIn: {
      from: '14:00',
      to: '21:00',
    },
    checkOut: {
      from: '08:00',
      to: '11:00',
    },
    contact: {
      phoneNumber: '+1 (831) 555-0123',
      email: 'front-desk@coastalbreeze.com',
    },
    currency: 'USD',
  },
  {
    id: 10,
    name: 'Urban Loft Hotel',
    price: 10,
    location: {
      city: 'Portland',
      address: '425 NW 23rd Avenue, Pearl District',
      latitude: 45.5289,
      longitude: -122.6989,
    },
    stars: 4,
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7'
    ],
    userRating: 4.4,
    checkIn: {
      from: '15:00',
      to: '23:00',
    },
    checkOut: {
      from: '07:00',
      to: '12:00',
    },
    contact: {
      phoneNumber: '+1 (503) 555-0789',
      email: 'hello@urbanloft.com',
    },
    currency: 'USD',
  },
];
