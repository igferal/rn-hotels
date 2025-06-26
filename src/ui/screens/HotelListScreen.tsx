import { View, Text, FlatList } from 'react-native';
import { useHotels } from 'api/useHotels';

export const HotelListScreen = () => {
  const { data, isLoading, error } = useHotels();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <Text>Hotel List Screen</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};
