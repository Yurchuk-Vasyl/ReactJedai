import React, { useState, useContext } from 'react';

const DisabledIconContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(getLocalStorage(');
  const change = (name) => {
    setTheme(name);
  };
  const localTheme = theme;
  setLocalStorage('theme', localTheme);
  return (
    <ThemeContext.Provider value={{ theme, change }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDisabeld = () => useContext(DisabledIconContext);
