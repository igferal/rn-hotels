import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FilterOptions, Hotel, OrderByOptions } from 'types/types';
import { sortHotels } from 'utils/sorting';
import { filterByCriteria } from 'utils/filters';

const API_URL = 'https://technology.lastminute.com/api/hotel.json';

/***
 * This hook is used to fetch the hotels from the API.
 * Even is a json using react query allow us to cache the data and use it in the app.
 * It is also used to mock the filters and order by options.
 */
export const useHotels = () => {
  const [filters, setFilters] = useState<FilterOptions[]>([]);
  const [order, setOrder] = useState<OrderByOptions>('price-asc');

  const fetchHotels = async () => {
    try {
      const response = await fetch(API_URL);
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

  const maxHotelPrice = data?.reduce(
    (max, hotel) => Math.max(max, hotel.price),
    0,
  );

  return {
    data,
    isLoading,
    error,
    filters,
    setFilters,
    order,
    setOrder,
    maxHotelPrice,
  };
};
