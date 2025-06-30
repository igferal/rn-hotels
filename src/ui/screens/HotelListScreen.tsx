import { FlatList, StyleSheet, View } from 'react-native';
import { useHotels } from 'api/useHotels';
import { useTranslation } from 'react-i18next';
import { HotelListElement } from 'ui/components/hotel-list/HotelListElement';
import { useNavigation } from '@react-navigation/native';
import { Hotel, HotelDetailStackParamList } from 'types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Text from 'ui/components/restyles/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoadingHotelListComponent } from 'ui/components/hotel-list/LoadingHotelListComponent';
import { FilterHotelsComponent } from 'ui/components/hotel-list/FilterHotelsComponent';

export const HotelListScreen = () => {
  const { t } = useTranslation();
  const { data, isLoading, error, setOrder, setFilters, order, filters, maxHotelPrice } =
    useHotels();
  const navigation =
    useNavigation<NativeStackNavigationProp<HotelDetailStackParamList>>();

  const handleHotelPress = (hotel: Hotel) => {
    navigation.navigate('HotelDetail', { hotel });
  };

  if (isLoading) {
    return <LoadingHotelListComponent />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text variant="header" marginVertical="s">{t('hotelList.title')}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <HotelListElement
            hotel={item}
            onPress={() => handleHotelPress(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text variant="body">{t('hotelList.empty')}</Text>
          </View>
        }
      />
      <FilterHotelsComponent
        setOrder={setOrder}
        setFilters={setFilters}
        order={order}
        filters={filters}
        maxHotelPrice={maxHotelPrice || 0}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  separator: {
    borderStyle: 'dashed',
    borderColor: 'lightgray',
    borderWidth: 1,
  },
});
