import Slider from '@react-native-community/slider';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'ui/theme/theme';
import Box from 'ui/components/restyles/Box';
import Text from 'ui/components/restyles/Text';
import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

type SliderComponentProps = {
  value: number;
  onValueChange: (value: number) => void;
  upperLimit: number;
  lowerLimit: number;
  reverse?: boolean;
  testID?: string;
};

/**
 * Custom slider component, providing theme support, upper and lower limits.
 * User can input manually values too.
 */
export const SliderComponent = ({
  value,
  onValueChange,
  upperLimit,
  lowerLimit,
  reverse = false,
  testID,
}: SliderComponentProps) => {
  const { colors } = useTheme<Theme>();

  const [sliderValue, setSliderValue] = useState(value);

  const handleValueChange = (userValue: number) => {
    setSliderValue(userValue);
    onValueChange(userValue);
  };

  const handleTextInputChange = (text: string) => {
    const userValue = Number(text);
    if (userValue >= lowerLimit && userValue <= upperLimit) {
      setSliderValue(userValue);
      onValueChange(userValue);
    }
  };
  return (
    <Box>
      <Box flexDirection="row" justifyContent="space-between">
        <Text>{reverse ? upperLimit : lowerLimit}</Text>
        <TextInput
          value={sliderValue.toString()}
          onChangeText={handleTextInputChange}
          testID={`${testID}-input`}
          accessible={true}
          accessibilityLabel={`${testID}-input`}
        />
        <Text>{reverse ? lowerLimit : upperLimit}</Text>
      </Box>

      <Slider
        style={styles.slider}
        value={sliderValue}
        inverted={reverse}
        onValueChange={handleValueChange}
        minimumValue={lowerLimit}
        testID={testID}
        maximumValue={upperLimit}
        step={1}
        minimumTrackTintColor={colors.mainBackgroundLighter}
        maximumTrackTintColor={colors.mainBackgroundDarker}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 40,
  },
});
