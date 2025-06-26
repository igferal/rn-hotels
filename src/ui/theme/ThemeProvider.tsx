import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle';
import theme from './theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <RestyleThemeProvider theme={theme}>{children}</RestyleThemeProvider>;
};
