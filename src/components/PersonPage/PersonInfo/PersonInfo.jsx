import PropTypes from 'prop-types';

import styles from './PersonInfo.module.css';

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={styles.peopleData__container}>
      <ul className={styles.peopleData__list}>
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <li className={styles.peopleData__item} key={title}>
                <span className={styles.peopleData__title}>{title}</span> :{' '}
                {data}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
