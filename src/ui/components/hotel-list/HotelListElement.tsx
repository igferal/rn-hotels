import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Hotel } from 'types/types';
import Text from 'ui/components/restyles/Text';
import Box from 'ui/components/restyles/Box';

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
        overflow="hidden"
      >
        <Box flex={1} width="100%">
          <Image source={{ uri: hotel.gallery[0] }} style={styles.image} />
        </Box>
        <Box
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="center"
        >
          <Text variant="headerSmall">{hotel.name}</Text>

          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>{hotel.userRating}</Text>
            <Text>{hotel.price}</Text>
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
    height: 150,
    resizeMode: 'cover',
  },
});
