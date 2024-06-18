'use client';

import { createContext, useState, useContext } from 'react';

const ReservationContext = createContext();

const initialState = {
  from: undefined,
  to: undefined,
};

export default function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error('Context was used outside provider');
  }

  return context;
}