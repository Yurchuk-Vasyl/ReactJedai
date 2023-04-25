import { useLocation } from 'react-router-dom';

import img from './img/02.png';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  let location = useLocation();
  return (
    <>
      <img className={styles.notfound__img} src={img} alt="Not Found" />
      <p className={styles.notfound__text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
