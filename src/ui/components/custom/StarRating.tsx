import { Star } from 'lucide-react-native';
import Box from 'ui/components/restyles/Box';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'ui/theme/theme';

export type StarRatingProps = {
  rating: number;
  size?: number;
};

export const StarRating = ({ rating, size = 16 }: StarRatingProps) => {
  const theme = useTheme<Theme>();

  return (
    <Box flexDirection="row" alignItems="center" gap="s">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          color={
            index < rating
              ? theme.colors.complementaryBackground
                 : theme.colors.textPrimary
          }
          fill={index < rating ? theme.colors.complementaryBackground : 'none'}
          width={size}
          height={size}
        />
      ))}
    </Box>
  );
};
