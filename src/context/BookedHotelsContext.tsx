import { createContext } from 'react';

export const BookedHotelsContext = createContext<{
  bookedHotels: number[];
  setBookedHotels: (bookedHotels: number[]) => void;
}>({
  bookedHotels: [],
  setBookedHotels: () => {},
});
