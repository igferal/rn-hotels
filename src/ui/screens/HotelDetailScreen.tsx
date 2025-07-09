import {
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Hotel } from 'types/types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from 'ui/components/restyles/Text';
import Box from 'ui/components/restyles/Box';
import { StarRating } from 'ui/components/custom/StarRating';
import { FallbackImage } from 'ui/components/custom/FallbackImage';
import {
  Calendar1,
  HotelIcon,
  ImageIcon,
  MapPinIcon,
  PhoneIcon,
  UserRound,
  MailIcon,
  AlarmClockCheck,
  AlarmClockMinus,
} from 'lucide-react-native';
import MapView, { Marker } from 'react-native-maps';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@shopify/restyle';
import { Theme } from 'ui/theme/theme';
import { BookHotelModal } from 'ui/components/hotel-detail/BookHotelModal';

export const HotelDetailScreen = () => {
  // Hacky but typesafe
  const { hotel } = useRoute().params as { hotel: Hotel };
  const { t } = useTranslation();
  const theme = useTheme<Theme>();

  const onPressEmail = () => {
    Linking.openURL(`mailto:${hotel.contact.email}`);
  };

  const onPressPhone = () => {
    Linking.openURL(`tel:${hotel.contact.phoneNumber}`);
  };

  const onPressDirectionWithLatAndLong = () => {
    Linking.openURL(
      `https://maps.google.com/?q=${hotel.location.latitude},${hotel.location.longitude}`,
    );
  };

  const [currentImagePreview, setCurrentImagePreview] = useState(
    hotel.gallery[0],
  );

  return (
    <SafeAreaView edges={['bottom']}>
      <FallbackImage source={currentImagePreview} style={styles.image} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <Text marginVertical="m" variant="hotelHeader">
          {hotel.name}
        </Text>
        <StarRating rating={hotel.stars} size={24} />
        <Box style={styles.infoRow} marginVertical="m">
          <Box flexDirection="row" alignItems="center" gap="s">
            <UserRound size={24} color={theme.colors.mainBackgroundDarker} />
            <Text variant="headerSmall">{t('hotelDetail.userRating')}</Text>
          </Box>
          <Text variant="headerSmall">{hotel.userRating} / 10</Text>
        </Box>
        <Box style={styles.sectionHeader}>
          <Calendar1 size={24} color={theme.colors.mainBackgroundDarker} />
          <Text variant="headerSmall">{t('hotelDetail.schedule')}</Text>
        </Box>
        <Box style={styles.infoRowWithMargin}>
          <Box flexDirection="row" alignItems="center" gap="s">
            <AlarmClockCheck
              size={20}
              color={theme.colors.mainBackgroundDarker}
            />
            <Text variant="boldBody">{t('hotelDetail.checkIn')}</Text>
          </Box>
          <Box style={styles.inlineContainer}>
            <Text variant="body">{hotel.checkIn.from}</Text>
            <Text variant="body"> - </Text>
            <Text variant="body">{hotel.checkIn.to}</Text>
          </Box>
        </Box>
        <Box style={styles.infoRow}>
          <Box flexDirection="row" alignItems="center" gap="s">
            <AlarmClockMinus
              size={20}
              color={theme.colors.mainBackgroundDarker}
            />
            <Text variant="boldBody">{t('hotelDetail.checkOut')}</Text>
          </Box>
          <Box style={styles.inlineContainer}>
            <Text variant="body">{hotel.checkOut.from}</Text>
            <Text variant="body"> - </Text>
            <Text variant="body">{hotel.checkOut.to}</Text>
          </Box>
        </Box>
        <Box style={styles.sectionHeader}>
          <Text variant="headerSmall">{t('hotelDetail.contact')}</Text>
        </Box>
        <TouchableOpacity style={styles.contactInfoRow} onPress={onPressPhone}>
          <Box flexDirection="row" alignItems="center" gap="s">
            <PhoneIcon size={20} color={theme.colors.mainBackgroundDarker} />
            <Text variant="boldBody">{t('hotelDetail.phone')}</Text>
          </Box>
          <Text variant="body">{hotel.contact.phoneNumber}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactInfoRow} onPress={onPressEmail}>
          <Box flexDirection="row" alignItems="center" gap="s">
            <MailIcon size={20} color={theme.colors.mainBackgroundDarker} />
            <Text variant="boldBody">{t('hotelDetail.email')}</Text>
          </Box>
          <Text variant="body">{hotel.contact.email}</Text>
        </TouchableOpacity>

        <Box style={styles.sectionHeader}>
          <ImageIcon size={24} color={theme.colors.mainBackgroundDarker} />
          <Text variant="headerSmall">{t('hotelDetail.imageGallery')}</Text>
        </Box>

        <ScrollView horizontal>
          {hotel.gallery.map((image, index) => (
            <TouchableOpacity
              style={styles.previewImageContainer}
              key={index}
              onPress={() => setCurrentImagePreview(image)}
            >
              <FallbackImage source={image} style={styles.previewImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Box style={styles.sectionHeader}>
          <HotelIcon size={24} color={theme.colors.mainBackgroundDarker} />
          <Text variant="headerSmall">{t('hotelDetail.location')}</Text>
        </Box>
        <TouchableOpacity
          style={styles.inlineContainer}
          onPress={onPressDirectionWithLatAndLong}
        >
          <MapPinIcon size={24} color={theme.colors.mainBackgroundDarker} />
          <Text variant="body" marginVertical="m">
            {hotel.location.city} {hotel.location.address}
          </Text>
        </TouchableOpacity>
        <MapView
          initialRegion={{
            latitude: hotel.location.latitude,
            longitude: hotel.location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: hotel.location.latitude,
              longitude: hotel.location.longitude,
            }}
            title={hotel.name}
            description={`${hotel.location.city} ${hotel.location.address}`}
          />
        </MapView>
        <Box marginTop="m">
          <BookHotelModal hotel={hotel} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  sectionHeader: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    width: '100%',
  },
  infoRowWithMargin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginVertical: 16,
    width: '100%',
  },
  contactInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    marginVertical: 8,
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    marginTop: 16,
    padding: 16,
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  previewImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  previewImageContainer: {
    marginRight: 10,
  },
  scrollContent: {
    paddingBottom: 300, // Fix to be able to go to the bottom of the screen and having sticky image at the top
  },
});
