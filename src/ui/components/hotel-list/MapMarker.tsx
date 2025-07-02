import { MapCallout, CalloutSubview } from 'react-native-maps';
import { MapPinned } from 'lucide-react-native';
import Box from 'ui/components/restyles/Box';
import { Hotel } from 'types/types';
import Text from 'ui/components/restyles/Text';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'ui/theme/theme';

type MapMarkerProps = {
  hotel: Hotel;
  onPressCallout: (hotel: Hotel) => void;
};

export const MapMarker = ({ hotel, onPressCallout }: MapMarkerProps) => {
  const theme = useTheme<Theme>();

  return (
    <MapCallout>
      <CalloutSubview
        onPress={() => onPressCallout(hotel)}
        style={styles.calloutSubview}
      >
        <Text variant="boldBody">{hotel.name}</Text>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="s"
        >
          <Text variant="boldBody">
            {hotel.price} {hotel.currency}
          </Text>
          <MapPinned size={24} color={theme.colors.mainBackgroundDarker} />
        </Box>
      </CalloutSubview>
    </MapCallout>
  );
};

const styles = StyleSheet.create({
  calloutSubview: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
