import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from 'ui/components/restyles/Text';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'ui/theme/theme';

export type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  title,
  onPress,

  variant = 'primary',
}: ButtonProps) => {
  const { colors } = useTheme<Theme>();

  const backgroundColor =
    variant === 'primary'
      ? colors.mainBackground
      : colors.complementaryBackground;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text variant="buttonText" style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
  },
});

export default Button;
