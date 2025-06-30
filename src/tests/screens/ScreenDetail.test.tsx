import React from 'react';
import { render } from '@testing-library/react-native';

import { HotelDetailScreen } from 'ui/screens/HotelDetailScreen';
import { ThemeProvider } from 'ui/theme/ThemeProvider';
import { fakeHotels } from '../utils/fakeData';

// Use fakeHotels data as requested
const mockHotelData = fakeHotels[0];

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {
      hotel: mockHotelData,
    },
  }),
}));

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock react-native-maps
jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  return {
    __esModule: true,
    default: (props: any) => <View {...props} testID="map-view" />,
    Marker: (props: any) => <View {...props} testID="map-marker" />,
  };
});

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: ({ children }: any) => children,
}));

describe('HotelDetailScreen', () => {
  it('should render the hotel detail screen with hotel name', () => {
    const { getByText } = render(
      <ThemeProvider>
        <HotelDetailScreen />
      </ThemeProvider>,
    );
    
    // Assert that the first hotel's name from fakeData is rendered
    expect(getByText(fakeHotels[0].name)).toBeTruthy();
  });

  it('should render hotel properties correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <HotelDetailScreen />
      </ThemeProvider>,
    );
    
    const hotel = fakeHotels[0];
    
    // Check hotel name
    expect(getByText(hotel.name)).toBeTruthy();
    
    // Check user rating
    expect(getByText(`${hotel.userRating} / 10`)).toBeTruthy();
    
    // Check contact information
    expect(getByText(hotel.contact.phoneNumber)).toBeTruthy();
    expect(getByText(hotel.contact.email)).toBeTruthy();
    
    // Check location
    expect(getByText(`${hotel.location.city} ${hotel.location.address}`)).toBeTruthy();
    
    // Check check-in times
    expect(getByText(hotel.checkIn.from)).toBeTruthy();
    expect(getByText(hotel.checkIn.to)).toBeTruthy();
    
    // Check check-out times
    expect(getByText(hotel.checkOut.from)).toBeTruthy();
    expect(getByText(hotel.checkOut.to)).toBeTruthy();
  });
});
