import { PropTypes } from 'prop-types';

import removeIcon from './img/disRemoveIcon.svg';
import disRemoveIcon from './img/removeIcon.svg';

import styles from './UiInput.module.css';

const UiInput = ({
  placeholder,
  type,
  value,
  classes,
  onChange,
  onSubmitRemove,
}) => {
  return (
    <div className={`${styles.wrapper__input} ${classes}`}>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      <img
        onClick={onSubmitRemove}
        src={value ? removeIcon : disRemoveIcon}
        className={`${styles.clear} ${value && styles.active__icon}`}
        alt="clear"
      />
    </div>
  );
};

UiInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onRemove: PropTypes.func,
};

export default UiInput;
