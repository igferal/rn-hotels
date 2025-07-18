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
import Box from 'ui/components/restyles/Box';
import { HotelMapList } from 'ui/components/hotel-list/HotelMapList';

export const HotelListScreen = () => {
  const { t } = useTranslation();
  const {
    data,
    isLoading,
    setOrder,
    setFilters,
    order,
    filters,
    maxHotelPrice,
  } = useHotels();
  const navigation =
    useNavigation<NativeStackNavigationProp<HotelDetailStackParamList>>();

  const handleHotelPress = (hotel: Hotel) => {
    navigation.navigate('HotelDetail', { hotel });
  };

  if (isLoading) {
    return <LoadingHotelListComponent />;
  }

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="s"
      >
        <Text variant="header">{t('hotelList.title')}</Text>
        <HotelMapList hotels={data || []} onPressHotel={handleHotelPress} />
      </Box>
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
