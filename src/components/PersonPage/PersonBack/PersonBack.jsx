import { useNavigate } from 'react-router-dom';

import iconBack from './img/back.svg';

import styles from './PersonBack.module.css';

const PersonBack = ({ children }) => {
  const navigate = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <a className={styles.link} href="#" onClick={(e) => handleGoBack(e)}>
      <img className={styles.link__img} src={iconBack} alt="arrow" />
      <span>{children}</span>
    </a>
  );
};

export default PersonBack;
