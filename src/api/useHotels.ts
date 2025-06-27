import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Hotel, OrderByOptions } from 'types/types';
import { sortHotels } from 'utils/sorting';

export const useHotels = () => {
  const [filters, setFilters] = useState<any>({});
  const [order, setOrder] = useState<OrderByOptions>('price-asc');

  const fetchHotels = async () => {
    try {
      const response = await fetch(
        'https://technology.lastminute.com/api/hotel.json',
      );
      const data = (await response.json()) as Hotel[];

      return sortHotels(data, order);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['hotels', filters, order],
    queryFn: () => fetchHotels(),
  });

  return { data, isLoading, error, filters, setFilters, order, setOrder };
};
