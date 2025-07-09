import MainNavigator from './src/ui/navigation/MainNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './src/i18n/i18n';
import { ThemeProvider } from './src/ui/theme/ThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import { BookedHotelsContext } from 'context/BookedHotelsContext';
import { useState } from 'react';

const queryClient = new QueryClient();

export default function App() {
  const [bookedHotels, setBookedHotels] = useState<number[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GestureHandlerRootView style={styles.container}>
          <BottomSheetModalProvider>
            <BookedHotelsContext.Provider
              value={{ bookedHotels, setBookedHotels }}
            >
              <MainNavigator />
            </BookedHotelsContext.Provider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
