import { useState } from 'react';
import { Image, ImageStyle } from 'react-native';

export type FallbackImageProps = {
  source: string;
  style: ImageStyle;
  fallbackImageUri?: string;
};

/**
 * Multiple of the api images are broken so we need to use a fallback image.
 */
export const FallbackImage = ({
  source,
  style,
  fallbackImageUri,
}: FallbackImageProps) => {
  const [error, setError] = useState(false);
  const fallbackImage = {
    uri:
      fallbackImageUri ||
      'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/3/3/1236119197406/Cromwell-Crown-hotel-001.jpg?width=465&dpr=1&s=none&crop=none',
  };

  return (
    <Image
      source={error ? fallbackImage : { uri: source }}
      style={style}
      testID="fallback-image"
      onError={() => {
        setError(true);
      }}
    />
  );
};
