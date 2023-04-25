import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import UiButton from '@ui/UiButton/UiButton';

import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);
  return (
    <div className={styles.peoplebutton__container}>
      <NavLink
        className={styles.people__link}
        to={`/people/?page=${counterPage - 1}`}
      >
        <UiButton onClick={handleChangePrev} disabled={!prevPage} classes>
          Previous
        </UiButton>
      </NavLink>
      <NavLink
        className={styles.people__link}
        to={`/people/?page=${counterPage + 1}`}
      >
        <UiButton onClick={handleChangeNext} disabled={!nextPage}>
          Next
        </UiButton>
      </NavLink>
    </div>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
