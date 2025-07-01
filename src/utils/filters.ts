import { FilterOptions, Hotel } from 'types/types';

/**
 * Simple function that filters the hotels by the criteria provided by the user.
 */
const filterByCriteria = (hotels: Hotel[], filters: FilterOptions[]) => {
  return hotels.filter(hotel => {
    return filters.every(filter => {
      switch (filter.type) {
        case 'price':
          return hotel.price <= filter.value;
        case 'stars':
          return hotel.stars <= filter.value;
        case 'userRating':
          return hotel.userRating <= filter.value;
        default:
          return true;
      }
    });
  });
};

export { filterByCriteria };
