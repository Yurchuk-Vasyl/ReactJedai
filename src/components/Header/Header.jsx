import { NavLink } from 'react-router-dom';

import { useEffect, useState } from 'react';

import {
  THEME_NEITRAL,
  THEME_DARK,
  THEME_LIGHT,
  useTheme,
} from '@context/ThemeProvider.jsx';

import { getLocalStorage } from '@utils/localStorage';

import FavoriteCounterIcon from '../FavoriteCounterIcon/FavoriteCounterIcon';

import light from './img/light.png';
import dark from './img/dark.png';
import neitral from './img/neitral.svg';

import styles from './Header.module.css';

const Header = () => {
  const [icon, setIcon] = useState(getLocalStorage('theme') || neitral);
  console.log(getLocalStorage('theme'));

  const isTheme = useTheme().theme;

  useEffect(() => {
    switch (isTheme) {
      case THEME_LIGHT:
        setIcon(light);
        break;
      case THEME_DARK:
        setIcon(dark);
        break;
      case THEME_NEITRAL:
        setIcon(neitral);
        break;
    }
  }, [isTheme]);
  return (
    <div className={styles.header__container}>
      <ul className={styles.nav__container}>
        <li>
          <div>
            <NavLink to="/ReactJedai">
              <img className={styles.icon} src={icon} alt="star wars"></img>
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink to="/ReactJedai">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/NotFound">NotFound</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>
      <FavoriteCounterIcon />
    </div>
  );
};

export default Header;
