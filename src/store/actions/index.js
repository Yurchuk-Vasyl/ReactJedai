import { ADD_PERSON_TO_FAVORITE } from '../constants/actionType';
import { REMOVE_PERSON_FROM_FAVORITE } from '../constants/actionType';

// export const setPersonToFavorite = (person) => ({
//   type: ADD_PERSON_TO_FAVORITE,
//   payload: person,
// });

export const setPersonToFavorite = (person) => {
  return {
    type: ADD_PERSON_TO_FAVORITE,
    payload: person,
  };
};

export const removePersonFromFavorite = (person) => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: person,
});
