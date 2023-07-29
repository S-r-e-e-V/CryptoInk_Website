import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("crypto_ink-theme") ?? "dark-mode"
  );
  const value = {
    theme,
    setTheme,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
