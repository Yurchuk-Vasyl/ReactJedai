import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people?.map(({ name, img, id }) => (
        <li className={styles.list__item} key={id}>
          <NavLink to={`/people/${id}`}>
            <img className={styles.person__photo} src={img} alt={name}></img>
            <p>{name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
