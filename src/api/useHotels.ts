import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FilterOptions, Hotel, OrderByOptions } from 'types/types';
import { sortHotels } from 'utils/sorting';
import { filterByCriteria } from 'utils/filters';

export const useHotels = () => {
  const [filters, setFilters] = useState<FilterOptions[]>([]);
  const [order, setOrder] = useState<OrderByOptions>('price-asc');

  console.log('filters', filters);
  console.log('order', order);

  const fetchHotels = async () => {
    try {
      const response = await fetch(
        'https://technology.lastminute.com/api/hotel.json',
      );
      const data = (await response.json()) as Hotel[];
      const filteredHotels = filterByCriteria(data, filters);
      return sortHotels(filteredHotels, order);
    } catch (error) {
      return [];
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['hotels', filters, order],
    queryFn: () => fetchHotels(),
  });

  return { data, isLoading, error, filters, setFilters, order, setOrder };
};
