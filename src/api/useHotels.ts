import { useQuery } from '@tanstack/react-query';
import { Hotel } from 'types/types';

export const useHotels = () => {
  const fetchHotels = async () => {
    try {
      const response = await fetch(
        'https://technology.lastminute.com/api/hotel.json',
      );
      const data = await response.json() as Hotel[];
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return useQuery({
    queryKey: ['hotels'],
    queryFn: () => fetchHotels(),
  });
};
