import { createTheme } from '@shopify/restyle';

const palette = {
  greenMain: '#0B7A75',
  greenMainDarker: '#074B47',
  greenMainLighter: '#11BBAF',
  orangeComplementary: '#BC6C25',
  orangeComplementaryLighter: '#C87900',
  orangeComplementaryDarker: '#E19F66',
  black: '#031926',
  white: '#FFFFFF',
};

const theme = createTheme({
  colors: {
    whiteBackground: palette.white,
    textPrimary: palette.black,
    mainBackground: palette.greenMain,
    mainBackgroundLighter: palette.greenMainLighter,
    mainBackgroundDarker: palette.greenMainDarker,
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
    buttonText: {
      fontWeight: 'bold',
      fontSize: 18,
      textTransform: 'uppercase',
    },
    defaults: {},
  },
});

export type Theme = typeof theme;
export default theme;
