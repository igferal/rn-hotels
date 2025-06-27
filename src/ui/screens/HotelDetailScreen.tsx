import {
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
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
  MapPinIcon,
  PhoneIcon,
  UserRound,
} from 'lucide-react-native';
import MapView from 'react-native-maps';

export const HotelDetailScreen = () => {
  // Hacky but typesafe
  const { hotel } = useRoute().params as { hotel: Hotel };

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

  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <FallbackImage source={hotel.gallery[0]} style={styles.image} />
      <ScrollView style={styles.container}>
        <Text variant="header">{hotel.name}</Text>

        <StarRating rating={hotel.stars} size={24} />
        <Box style={styles.sectionHeader}>
          <Calendar1 size={24} />
          <Text variant="headerSmall">Horarios</Text>
        </Box>
        <Box style={styles.infoRowWithMargin}>
          <Text variant="boldBody">Check in:</Text>
          <Box style={styles.inlineContainer}>
            <Text variant="body">{hotel.checkIn.from}</Text>
            <Text variant="body"> - </Text>
            <Text variant="body">{hotel.checkIn.to}</Text>
          </Box>
        </Box>
        <Box style={styles.infoRow}>
          <Text variant="boldBody">Check out:</Text>
          <Box style={styles.inlineContainer}>
            <Text variant="body">{hotel.checkOut.from}</Text>
            <Text variant="body"> - </Text>
            <Text variant="body">{hotel.checkOut.to}</Text>
          </Box>
        </Box>
        <Box style={styles.sectionHeader}>
          <PhoneIcon size={24} />
          <Text variant="headerSmall">Contacto</Text>
        </Box>
        <TouchableOpacity style={styles.contactInfoRow} onPress={onPressPhone}>
          <Text variant="boldBody">Teléfono:</Text>
          <Text variant="body">{hotel.contact.phoneNumber}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactInfoRow} onPress={onPressEmail}>
          <Text variant="boldBody">Email:</Text>
          <Text variant="body">{hotel.contact.email}</Text>
        </TouchableOpacity>
        <Box style={styles.infoRow} marginVertical="m">
          <Box flexDirection="row" alignItems="center" gap="s">
            <UserRound size={24} />
            <Text variant="headerSmall">User Rating</Text>
          </Box>
          <Text variant="headerSmall">{hotel.userRating} / 10</Text>
        </Box>

        <Box style={styles.sectionHeader}>
          <HotelIcon size={24} />
          <Text variant="headerSmall">Location</Text>
        </Box>
        <TouchableOpacity
          style={styles.inlineContainer}
          onPress={onPressDirectionWithLatAndLong}
        >
          <MapPinIcon size={24} />
          <Text variant="body" marginVertical="m">
            {hotel.location.city} {hotel.location.address}
          </Text>
        </TouchableOpacity>
        <MapView
          initialRegion={{
            latitude: hotel.location.latitude,
            longitude: hotel.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
        <Button title="Reservar" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 200,
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
    padding: 16,
  },
});
