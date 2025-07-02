import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Hotel } from 'types/types';
import MapView, { Marker } from 'react-native-maps';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { MapIcon, MapPinned } from 'lucide-react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'ui/theme/theme';
import Text from 'ui/components/restyles/Text';
import { useTranslation } from 'react-i18next';
import Box from 'ui/components/restyles/Box';
import { MapMarker } from './MapMarker';

type HotelMapProps = {
  hotels: Hotel[];
  onPressHotel: (hotel: Hotel) => void;
};

const DEFAULT_LAT = 45.8289755;
const DEFAULT_LONG = 9.0050653;

/**
 * This component is used to display a map of the hotels and a bottom sheet with the hotels.
 * Uses a Modal instead of bottomsheet to render the view at the bottom of the screen.
 */
export const HotelMapList = ({ hotels, onPressHotel }: HotelMapProps) => {
  const firstHotel = hotels[0];
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const theme = useTheme<Theme>();
  const mapRef = useRef<MapView>(null);
  const { t } = useTranslation();

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const onPressCallout = (hotel: Hotel) => {
    bottomSheetModalRef.current?.dismiss();
    setIsBottomSheetOpen(false);
    onPressHotel(hotel);
  };

  const markers = hotels.map(hotel => (
    <Marker
      key={hotel.id}
      coordinate={{
        latitude: hotel?.location?.latitude ?? DEFAULT_LAT,
        longitude: hotel?.location?.longitude ?? DEFAULT_LONG,
      }}
      pointerEvents="none"
    >
      <MapMarker hotel={hotel} onPressCallout={onPressCallout} />
    </Marker>
  ));

  // opens or closes the bottom sheet
  const toggleBottomSheet = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);

    if (isBottomSheetOpen) {
      bottomSheetModalRef.current?.dismiss();
    } else {
      bottomSheetModalRef.current?.present();
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={toggleBottomSheet}
        accessibilityLabel={'showHotelMap'}
        accessibilityRole="button"
        testID="map-button"
      >
        <MapIcon size={24} color={theme.colors.mainBackgroundDarker} />
      </TouchableOpacity>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={['75%']}
        backgroundStyle={styles.bottomSheetBackground}
        onDismiss={() => setIsBottomSheetOpen(false)}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Box flexDirection="row" alignItems="center" gap="s" marginBottom="m">
            <MapPinned size={24} color={theme.colors.mainBackgroundDarker} />
            <Text accessibilityLabel={t('hotelLocations')} variant="headerSmall">
              {t('hotelLocations')}
            </Text>
          </Box>
          <MapView
            style={styles.map}
            ref={mapRef}
            accessibilityLabel="map-view"
            testID="map-view"
            onMapReady={() => {
              mapRef.current?.fitToElements();
            }}
            initialRegion={{
              latitude: firstHotel?.location?.latitude ?? DEFAULT_LAT,
              longitude: firstHotel?.location?.longitude ?? DEFAULT_LONG,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            {markers}
          </MapView>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  map: {
    flex: 1,
    height: Dimensions.get('window').height * 0.6,
    width: '100%',
    borderRadius: 8,
  },
});
