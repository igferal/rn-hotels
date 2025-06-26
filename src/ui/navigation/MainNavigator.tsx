import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HotelListScreen } from 'ui/screens/HotelListScreen';
import { HotelDetailScreen } from 'ui/screens/HotelDetailScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    HotelList: {
      screen: HotelListScreen,
      options: {
        headerShown: false,
      },
    },
    HotelDetail: {
      screen: HotelDetailScreen,
      options: {
        headerShown: false,
        animation: 'slide_from_right',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
