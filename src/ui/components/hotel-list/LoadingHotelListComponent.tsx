import { ActivityIndicator } from 'react-native';
import Box from 'ui/components/restyles/Box';
import Text from 'ui/components/restyles/Text';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'ui/theme/theme';

/**
 * Simple component that displays a loading state in the hotel list.
 */
export const LoadingHotelListComponent = () => {
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  return (
    <Box alignItems="center" justifyContent="center" flex={1}>
      <Text variant="body" color="textPrimary" marginBottom="s">{t('hotelList.loading')}</Text>
      <ActivityIndicator size="large" color={theme.colors.mainBackground} />
    </Box>
  );
};

