import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { HotelListScreen } from 'ui/screens/HotelListScreen';
import { ThemeProvider } from 'ui/theme/ThemeProvider';
import { fakeHotels } from '../utils/fakeData';

// Mock the restyles Text component
jest.mock('ui/components/restyles/Text', () => {
  const { Text } = require('react-native');
  return (props: any) => <Text {...props} />;
});

// Mock react-i18next
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
    CalloutSubview: (props: any) => <View {...props} testID="map-callout" />,
    MapCallout: (props: any) => <View {...props} testID="map-callout" />,
    MapView: (props: any) => <View {...props} testID="map-view" />,
  };
});

// Mock react-navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: ({ children }: any) => children,
}));

jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react');
  const { View } = require('react-native');

  const BottomSheetComponent = (props: any) => {
    return React.createElement(View, props, props.children);
  };

  class BottomSheet extends React.Component<any> {
    snapToIndex() {}
    snapToPosition() {}
    expand() {}
    collapse() {}
    close() {}
    forceClose() {}
    present() {}

    render() {
      return this.props.children;
    }
  }
  /*
  IA generated mock for the BottomSheetModal
  */
  const BottomSheetModal = React.forwardRef((props: any, ref: any) => {
    React.useImperativeHandle(ref, () => ({
      present: jest.fn(),
      dismiss: jest.fn(),
    }));
    return React.createElement(View, props, props.children);
  });

  return {
    __esModule: true,
    default: BottomSheet,
    BottomSheetView: BottomSheetComponent,
    BottomSheetModal: BottomSheetModal,
  };
});

const mockUseHotels = jest.fn();

jest.mock('api/useHotels', () => ({
  useHotels: () => mockUseHotels(),
}));

describe('ScreenListTest', () => {
  let mockFilters: any;
  let mockSetFilters: jest.Mock;

  beforeEach(() => {
    mockFilters = {};
    mockSetFilters = jest.fn(newFilters => {
      if (typeof newFilters === 'function') {
        mockFilters = newFilters(mockFilters);
      } else {
        mockFilters = newFilters;
      }
    });

    mockUseHotels.mockReturnValue({
      data: fakeHotels,
      isLoading: false,
      error: null,
      setOrder: jest.fn(),
      setFilters: mockSetFilters,
      order: 'name',
      filters: mockFilters,
      maxHotelPrice: 100,
    });
  });

  it('should render the screen list', () => {
    render(
      <ThemeProvider>
        <HotelListScreen />
      </ThemeProvider>,
    );
    expect(screen.getByText('hotelList.title')).toBeTruthy();
  });

  it('should render the screen list with hotels', () => {
    mockFilters = [];
    mockUseHotels.mockReturnValue({
      data: fakeHotels,
      isLoading: false,
      error: null,
      setOrder: jest.fn(),
      setFilters: mockSetFilters,
      order: 'name',
      filters: mockFilters,
      maxHotelPrice: 100,
    });

    render(
      <ThemeProvider>
        <HotelListScreen />
      </ThemeProvider>,
    );
    expect(screen.getByText('hotelList.title')).toBeTruthy();
    expect(screen.getAllByText(fakeHotels[0].name)).toBeTruthy();
  });
  it('should render show the filter modal when the filter button is pressed', () => {
    mockFilters = [];
    mockUseHotels.mockReturnValue({
      data: fakeHotels,
      isLoading: false,
      error: null,
      setOrder: jest.fn(),
      setFilters: mockSetFilters,
      order: 'name',
      filters: mockFilters,
      maxHotelPrice: 100,
    });

    render(
      <ThemeProvider>
        <HotelListScreen />
      </ThemeProvider>,
    );

    const filterButton = screen.getByTestId('filterButton');
    fireEvent.press(filterButton);
    expect(screen.getByText('filters.title')).toBeTruthy();
  });

  it('should render the map with the hotels', () => {
    mockFilters = [];
    mockUseHotels.mockReturnValue({
      data: fakeHotels,
      isLoading: false,
      error: null,
      setOrder: jest.fn(),
      setFilters: mockSetFilters,
      order: 'name',
      filters: mockFilters,
      maxHotelPrice: 100,
    });

    render(
      <ThemeProvider>
        <HotelListScreen />
      </ThemeProvider>,
    );

    const mapButton = screen.getByTestId('map-button');
    fireEvent.press(mapButton);

    const mapView = screen.getByTestId('map-view');
    expect(mapView).toBeTruthy();
    expect(screen.getByText('hotelLocations')).toBeTruthy();
  });
});
