import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Text from 'ui/components/restyles/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'ui/theme/theme';

export type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  outline?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

/***
 * Custom button implementation, allows to use variants, and outlined styles.
 */
export const Button = ({
  title,
  onPress,
  outline = false,
  variant = 'primary',
  style,
  testID,
}: ButtonProps) => {
  const { colors } = useTheme<Theme>();

  const backgroundColor =
    variant === 'primary'
      ? colors.mainBackground
      : colors.complementaryBackground;

  const outlineStyle = outline && {
    borderWidth: 1,
    borderColor: backgroundColor,
    backgroundColor: colors.whiteBackground,
  };
  const textColor = outline ? backgroundColor : colors.whiteBackground;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, outlineStyle, style]}
      onPress={onPress}
      testID={testID}
    >
      <Text variant="buttonText" style={[styles.text, { color: textColor }]}>
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
