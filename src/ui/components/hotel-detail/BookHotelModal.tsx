import Text from 'ui/components/restyles/Text';

import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { useContext, useRef, useState } from 'react';
import { Hotel } from 'types/types';
import { Button } from 'ui/components/custom/Button';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { BookedContext } from '../Context/BookedContext';
import { DateData, MarkedDates } from 'react-native-calendars/src/types';
import dayjs from 'dayjs';

type BookHotelModalProps = {
  hotel: Hotel;
};

export const BookHotelModal = ({ hotel }: BookHotelModalProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [isOpen, setIsOpen] = useState(false);

  const { bookedDates, setBookedDates } = useContext(BookedContext);

  console.log('bookedDates', bookedDates);

  const toggleModal = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      bottomSheetModalRef.current?.dismiss();
    } else {
      bottomSheetModalRef.current?.present();
    }
  };

  let markedDates: MarkedDates = {};
  const hotelBookedDates = bookedDates[hotel.id] || {};

  Object.entries(hotelBookedDates).forEach(([date, selected]) => {
    markedDates[date] = {
      selected,
      selectedColor: 'green',
    };
  });

  const handleDayPress = (day: DateData) => {
    const { dateString } = day;
    const newBookedDates = { ...bookedDates };

    const wasSelected = hotelBookedDates[dateString];

    newBookedDates[hotel.id] = {
      ...hotelBookedDates,
      [dateString]: !wasSelected,
    };
    setBookedDates(newBookedDates);
  };

  const today = dayjs().format('YYYY-MM-DD');

  return (
    <>
      <Button onPress={toggleModal} title="Book Hotel" />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={['75%']}
        onDismiss={() => setIsOpen(false)}
      >
        <BottomSheetView style={styles.bottomSheetview}>
          <Text variant="header">{hotel.name}</Text>
          <Calendar
            minDate={today}
            markingType="multi-dot"
            markedDates={markedDates}
            onDayPress={handleDayPress}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetview: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
  },
});
