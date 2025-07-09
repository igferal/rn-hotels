export interface HotelLocation {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface CheckInOut {
  from: string;
  to: string;
}

export interface HotelContact {
  phoneNumber: string;
  email: string;
}

export interface Hotel {
  id: number;
  name: string;
  location: HotelLocation;
  stars: number;
  checkIn: CheckInOut;
  checkOut: CheckInOut;
  contact: HotelContact;
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}

export type OrderByOptions =
  | 'price-asc'
  | 'price-desc'
  | 'rating-asc'
  | 'rating-desc'
  | 'stars-asc'
  | 'stars-desc'
  | 'name-asc'
  | 'name-desc';

export type FilterOptions = {
  type: 'price' | 'stars' | 'userRating';
  value: number;
};

export type HotelDetailStackParamList = {
  HotelDetail: { hotel: Hotel };
};

export type BookedDate = Record<string, boolean>;

export type BookedDates = {
  [key: string]: BookedDate;
};
