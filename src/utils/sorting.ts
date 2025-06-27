import { OrderByOptions } from 'types/types';
import { Hotel } from 'types/types';

type SortingFunction = (a: Hotel, b: Hotel) => number;

export const sortHotels = (hotels: Hotel[], order: OrderByOptions) => {
  const orderingFunctions: Record<OrderByOptions, SortingFunction> = {
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    'rating-asc': (a, b) => a.userRating - b.userRating,
    'rating-desc': (a, b) => b.userRating - a.userRating,
    'stars-asc': (a, b) => a.stars - b.stars,
    'stars-desc': (a, b) => b.stars - a.stars,
    'name-asc': (a, b) => a.name.localeCompare(b.name),
    'name-desc': (a, b) => b.name.localeCompare(a.name),
  };

  return hotels.sort(orderingFunctions[order]);
};
