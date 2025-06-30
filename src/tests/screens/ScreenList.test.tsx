import React from 'react';
import { render } from '@testing-library/react-native';

import { HotelDetailScreen } from 'ui/screens/HotelDetailScreen';
import { ThemeProvider } from 'ui/theme/ThemeProvider';

// Mock the restyles Text component
jest.mock('ui/components/restyles/Text', () => {
  const { Text } = require('react-native');
  return (props: any) => <Text {...props} />;
});

// Mock the restyles Box component
jest.mock('ui/components/restyles/Box', () => {
  const { View } = require('react-native');
  return (props: any) => <View {...props} />;
});

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock react-navigation
jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {
      hotel: {
        id: 1,
        name: 'Test Hotel',
        price: 120,
        location: {
          city: 'Test City',
          address: 'Test Address',
          latitude: 40.7614,
          longitude: -73.9776,
        },
        stars: 4,
        gallery: ['https://example.com/image.jpg'],
        userRating: 4.5,
        checkIn: { from: '15:00', to: '23:00' },
        checkOut: { from: '07:00', to: '12:00' },
        contact: {
          phoneNumber: '+1 (212) 555-0123',
          email: 'test@hotel.com',
        },
        currency: 'USD',
      },
    },
  }),
}));

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: ({ children }: any) => children,
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

// Mock Linking
jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(() => Promise.resolve()),
}));

// Mock Lucide icons
jest.mock('lucide-react-native', () => ({
  Calendar1: () => null,
  HotelIcon: () => null,
  ImageIcon: () => null,
  MapPinIcon: () => null,
  PhoneIcon: () => null,
  UserRound: () => null,
  MailIcon: () => null,
  AlarmClockCheck: () => null,
  AlarmClockMinus: () => null,
}));

// Mock custom components
jest.mock('ui/components/custom/StarRating', () => ({
  StarRating: () => null,
}));

jest.mock('ui/components/custom/FallbackImage', () => ({
  FallbackImage: () => null,
}));

jest.mock('ui/components/custom/Button', () => ({
  Button: () => null,
}));

it('should render the hotel detail screen', () => {
  const { getByText } = render(
    <ThemeProvider>
      <HotelDetailScreen />
    </ThemeProvider>,
  );
  
  expect(getByText('Test Hotel')).toBeTruthy();
});
