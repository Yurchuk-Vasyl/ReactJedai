import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import markIcon from './img/markIcon.svg';

import styles from './FavoriteCounteIcon.module.css';

const FavoriteCounterIcon = () => {
  const [count, setCount] = useState();

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString().length > 2 ? setCount('...') : setCount(length);
  }, [storeData]);

  return (
    <div className={styles.favorite__container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img
          src={markIcon}
          className={styles.mark__icon}
          alt="favorite icon"
        ></img>
      </Link>
    </div>
  );
};

export default FavoriteCounterIcon;
