import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from '@store/actions/index.js';

import favorite from './img/favorite.svg';
import favoriteFill from './img/favoriteFill.svg';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePerson = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.photo__wrapper}>
        <div className={styles.photo__container}>
          <img
            className={styles.personal__photo}
            src={personPhoto}
            alt={personName}
          />
        </div>
        <img
          className={styles.personal__icon}
          src={personFavorite ? favoriteFill : favorite}
          alt="icon"
          onClick={dispatchFavoritePerson}
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  setPersonFavorite: PropTypes.func,
  personFavorite: PropTypes.bool,
};

export default PersonPhoto;
