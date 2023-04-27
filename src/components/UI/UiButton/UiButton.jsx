import PropTypes from 'prop-types';

import styles from './UiButton.module.css';

import '../index.css';

const UiButton = ({ children, onClick, disabled, theme = 'dark', classes }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[theme]} ${classes}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

UiButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  theme: PropTypes.string,
  //classes: PropTypes.string,
};

export default UiButton;
