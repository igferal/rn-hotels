import { StyleSheet, TouchableOpacity } from 'react-native';
import { Hotel } from 'types/types';
import Text from 'ui/components/restyles/Text';
import Box from 'ui/components/restyles/Box';
import { StarRating } from 'ui/components/custom/StarRating';
import { FallbackImage } from 'ui/components/custom/FallbackImage';

type HoteListElementProps = {
  hotel: Hotel;
  onPress: () => void;
};

export const HotelListElement = ({ hotel, onPress }: HoteListElementProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        borderRadius={10}
        shadowOffset={{ width: 1, height: 2 }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        elevation={5}
        overflow="hidden"
        
      >
        <FallbackImage source={hotel.gallery[0]} style={styles.image} />

        <Box
          marginTop="m"
          width="100%"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text variant="headerSmall">{hotel.name}</Text>
          <Text variant="body">
            {hotel.location.city}, {hotel.location.address}
          </Text>
          <Box
            marginTop="s"
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <StarRating rating={hotel.stars} />
            <Text variant="headerSmall">
              {hotel.price} {hotel.currency}
            </Text>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
