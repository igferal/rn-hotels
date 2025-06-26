import { createTheme } from '@shopify/restyle';

const palette = {
  greenMain: '#0B7A75',
  greenMainDarker: '#E19F66',
  greenMainLighter: '#E19F66',

  orangeComplementary: '#BC6C25',
  orangeComplementaryLighter: '#C87900',
  orangeComplementaryDarker: '#E19F66',

  black: '#031926',
  white: '#FEFAE0',
};

const theme = createTheme({
  colors: {
    whiteBackground: palette.white,
    textPrimary: palette.black,
    mainBackground: palette.greenMain,
    complementaryBackground: palette.orangeComplementary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    headerSmall: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    boldBody: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {},
  }
});

export type Theme = typeof theme;
export default theme;
