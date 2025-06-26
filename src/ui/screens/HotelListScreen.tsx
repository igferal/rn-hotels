import { View, Text, FlatList } from 'react-native';
import { useHotels } from 'api/useHotels';
import { useTranslation } from 'react-i18next';

export const HotelListScreen = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useHotels();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <Text>{t('hotelList.title')}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};
