import { StyleSheet, TouchableOpacity } from 'react-native';
import { Hotel } from 'types/types';
import Text from 'ui/components/restyles/Text';
import Box from 'ui/components/restyles/Box';
import { StarRating } from 'ui/components/custom/StarRating';
import { FallbackImage } from 'ui/components/custom/FallbackImage';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'ui/theme/theme';

type HoteListElementProps = {
  hotel: Hotel;
  onPress: () => void;
};

/**
 * Simple component that displays a hotel in the hotel list.
 */
export const HotelListElement = ({ hotel, onPress }: HoteListElementProps) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles.shadowContainer]}
    >
      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        borderRadius={10}
        overflow="hidden"
      >
        <Box style={styles.imageContainer}>
          <FallbackImage source={hotel.gallery[0]} style={styles.image} />

          <Text
            variant="body"
            color="whiteBackground"
            style={[
              styles.rating,
              { backgroundColor: theme.colors.mainBackgroundDarker },
            ]}
          >
            {hotel.userRating.toFixed(1)}
          </Text>
        </Box>

        <Box
          marginTop="m"
          width="100%"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          paddingVertical="s"
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
  imageContainer: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  rating: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: 'white',
  },
});
