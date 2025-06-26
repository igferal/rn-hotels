import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Hotel } from 'types/types';

export const HotelDetailScreen = () => {

  // Hacky but typesafe 
  const { hotel } = useRoute().params as { hotel: Hotel };

  return (
    <View>
      <Text>{hotel.name}</Text>
    </View>
  );
};
