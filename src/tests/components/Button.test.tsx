import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { Button } from 'ui/components/custom/Button';
import theme from 'ui/theme/theme';

// Mock the restyle Text component
jest.mock('ui/components/restyles/Text', () => {
  const { Text } = require('react-native');
  return (props: any) => <Text {...props} />;
});

// Wrapper component with theme provider
const ButtonWithTheme = (props: any) => (
  <ThemeProvider theme={theme}>
    <Button {...props} />
  </ThemeProvider>
);

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(
      <ButtonWithTheme title="Test Button" onPress={mockOnPress} />,
    );

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(
      <ButtonWithTheme title="Test Button" onPress={mockOnPress} />,
    );

    fireEvent.press(getByText('Test Button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
