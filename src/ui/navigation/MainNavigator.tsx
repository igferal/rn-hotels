import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HotelListScreen } from 'ui/screens/HotelListScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    HotelList: HotelListScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
