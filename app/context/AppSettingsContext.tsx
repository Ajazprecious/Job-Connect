import React, { createContext, useContext, useState } from "react";

const AppSettingsContext = createContext({
  darkMode: false,
  notifications: true,
  defaultLocation: "",
  defaultCategory: "",
  setDarkMode: (v: boolean) => {},
  setNotifications: (v: boolean) => {},
  setDefaultLocation: (v: string) => {},
  setDefaultCategory: (v: string) => {},
});

export const useAppSettings = () => useContext(AppSettingsContext);

export const AppSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [defaultLocation, setDefaultLocation] = useState("");
  const [defaultCategory, setDefaultCategory] = useState("");

  return (
    <AppSettingsContext.Provider
      value={{
        darkMode,
        notifications,
        defaultLocation,
        defaultCategory,
        setDarkMode,
        setNotifications,
        setDefaultLocation,
        setDefaultCategory,
      }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
};

export default AppSettingsProvider;