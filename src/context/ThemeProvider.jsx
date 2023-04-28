import React, { useState, useContext } from 'react';

import { changeCSSVariables } from '@services/changeCSSVariables.js';

import { setLocalStorage, getLocalStorage } from '@utils/localStorage';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'neitral';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(getLocalStorage('theme') || THEME_NEITRAL);
  // const [localtTheme, setLocalTheme] = useState(THEME_NEITRAL);
  changeCSSVariables(theme);

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

export const useTheme = () => useContext(ThemeContext);
