import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext<LanguageAppContextType | undefined>(
  undefined
);

export const useLanguageApp = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageApp debe ser utilizado dentro de un proveedor LanguageAppProvider"
    );
  }
  return context;
};

export const LanguageAppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [languageApp, setLanguageApp] =
    useState<LanguageAppContextType["languageApp"]>("es");
  const onChangeLanguageApp = () =>
    setLanguageApp(languageApp === "es" ? "en" : "es");
  return (
    <LanguageContext.Provider value={{ languageApp, onChangeLanguageApp }}>
      {children}
    </LanguageContext.Provider>
  );
};
