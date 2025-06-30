import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { FallbackImage } from 'ui/components/custom/FallbackImage';

describe('FallbackImage Component', () => {
  const mockStyle = { width: 100, height: 100 };
  const mockSource = 'https://example.com/test-image.jpg';
  const fallbackImageUri =
    'https://example.com/test-image-after-error.jpg';

  it('renders correctly with provided source', () => {
    const { getByTestId } = render(
      <FallbackImage source={mockSource} style={mockStyle} />,
    );

    const image = getByTestId('fallback-image');
    expect(image).toBeTruthy();
  });

  it('initially displays the provided source', () => {
    const { getByTestId } = render(
      <FallbackImage source={mockSource} style={mockStyle} />,
    );

    const image = getByTestId('fallback-image');
    expect(image.props.source.uri).toBe(mockSource);
  });

  it('switches to fallback image on error', () => {
    const { getByTestId } = render(
      <FallbackImage source={mockSource} style={mockStyle} fallbackImageUri={fallbackImageUri} />,
    );

    const image = getByTestId('fallback-image');
    expect(image.props.source.uri).toBe(mockSource);
    // Manually trigger the error
    fireEvent(image, 'error');
    expect(image.props.source.uri).toBe(fallbackImageUri);
  });
});
