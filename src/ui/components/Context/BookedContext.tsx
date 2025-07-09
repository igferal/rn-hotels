import { createContext, useState } from 'react';
import { BookedDates } from 'types/types';

type BookedContextType = {
  bookedDates: BookedDates;
  setBookedDates: (dates: BookedDates) => void;
};

export const BookedContext = createContext<BookedContextType>({
  bookedDates: {},
  setBookedDates: () => {},
});

export const BookedDatesProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookedDates, setBookedDates] = useState<BookedDates>({});

  return (
    <BookedContext.Provider value={{ bookedDates, setBookedDates }}>
      {children}
    </BookedContext.Provider>
  );
};
