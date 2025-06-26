import { ActivityIndicator } from 'react-native';
import Box from 'ui/components/restyles/Box';
import Text from 'ui/components/restyles/Text';
import { useTranslation } from 'react-i18next';

export const LoadingHotelListComponent = () => {
  const { t } = useTranslation();

  return (
    <Box alignItems="center" justifyContent="center" flex={1}>
      <Text>{t('hotelList.loading')}</Text>
      <ActivityIndicator />
    </Box>
  );
};

