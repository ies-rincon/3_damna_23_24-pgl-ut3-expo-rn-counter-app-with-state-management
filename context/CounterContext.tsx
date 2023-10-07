import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error(
      "useCounter debe ser utilizado dentro de un proveedor CounterProvider"
    );
  }
  return context;
};

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clickCounter, setClickCounter] = useState<number>(0);

  const handleRefresh = () => {
    setClickCounter(0);
  };

  const handleIncrement = () => {
    setClickCounter(clickCounter + 1);
  };

  const handleDecrement = () => {
    if (clickCounter > 0) {
      setClickCounter(clickCounter - 1);
    }
  };

  return (
    <CounterContext.Provider
      value={{ clickCounter, handleIncrement, handleDecrement, handleRefresh }}
    >
      {children}
    </CounterContext.Provider>
  );
};
