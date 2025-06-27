import { FilterOptions, Hotel } from 'types/types';

const filterByCriteria = (hotels: Hotel[], filters: FilterOptions[]) => {
  return hotels.filter(hotel => {
    return filters.every(filter => {
      switch (filter.type) {
        case 'price':
          return hotel.price <= filter.value;
        case 'stars':
          return hotel.stars >= filter.value;
        case 'userRating':
          return hotel.userRating >= filter.value;
        default:
          return true;
      }
    });
  });
};

export { filterByCriteria };
