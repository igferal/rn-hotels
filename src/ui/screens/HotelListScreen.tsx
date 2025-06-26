import { FlatList, StyleSheet } from 'react-native';
import { useHotels } from 'api/useHotels';
import { useTranslation } from 'react-i18next';
import { HotelListElement } from 'ui/components/hotel-list/HotelListElement';
import { useNavigation } from '@react-navigation/native';
import { Hotel, HotelDetailStackParamList } from 'types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Text from 'ui/components/restyles/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoadingHotelListComponent } from 'ui/components/hotel-list/LoadingHotelListComponent';

export const HotelListScreen = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useHotels();
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
      <Text variant="header">{t('hotelList.title')}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <HotelListElement
            hotel={item}
            onPress={() => handleHotelPress(item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
