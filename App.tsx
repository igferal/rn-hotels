import MainNavigator from './src/ui/navigation/MainNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './src/i18n/i18n';
import { ThemeProvider } from './src/ui/theme/ThemeProvider';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
