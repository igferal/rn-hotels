import React from 'react';
import { render } from '@testing-library/react-native';

import { HotelDetailScreen } from 'ui/screens/HotelDetailScreen';
import { ThemeProvider } from 'ui/theme/ThemeProvider';
import { fakeHotels } from '../utils/fakeData';

const mockHotelData = fakeHotels[0];

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {
      hotel: mockHotelData,
    },
  }),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  return {
    __esModule: true,
    default: (props: any) => <View {...props} testID="map-view" />,
    Marker: (props: any) => <View {...props} testID="map-marker" />,
  };
});

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

    expect(getByText(fakeHotels[0].name)).toBeTruthy();
  });

  it('should render hotel properties correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <HotelDetailScreen />
      </ThemeProvider>,
    );

    const hotel = fakeHotels[0];

    expect(getByText(hotel.name)).toBeTruthy();

    expect(getByText(`${hotel.userRating} / 10`)).toBeTruthy();

    expect(getByText(hotel.contact.phoneNumber)).toBeTruthy();
    expect(getByText(hotel.contact.email)).toBeTruthy();

    expect(
      getByText(`${hotel.location.city} ${hotel.location.address}`),
    ).toBeTruthy();

    expect(getByText(hotel.checkIn.from)).toBeTruthy();
    expect(getByText(hotel.checkIn.to)).toBeTruthy();

    expect(getByText(hotel.checkOut.from)).toBeTruthy();
    expect(getByText(hotel.checkOut.to)).toBeTruthy();
  });
});
