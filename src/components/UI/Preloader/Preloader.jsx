import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import loadingWhite from './img/loader-white.svg';
import loadingBlack from './img/loader-black.svg';
import loadingBlue from './img/loader-blue.svg';

import styles from './Preloader.module.css';

const Preloader = ({ theme = 'white', isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState();

  useEffect(() => {
    switch (theme) {
      case 'black':
        setLoaderIcon(loadingBlack);
        break;
      case 'white':
        setLoaderIcon(loadingWhite);
        break;
      case 'blue':
        setLoaderIcon(loadingBlue);
        break;
      default:
        setLoaderIcon(loadingWhite);
        break;
    }
  }, []);

  return (
    <div className={styles.preloader}>
      <img
        className={`${styles.preloader__icon} ${
          isShadow && styles.shadow
        } ${classes}`}
        src={loaderIcon}
        alt="loading"
      ></img>
    </div>
  );
};

Preloader.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
};

export default Preloader;
