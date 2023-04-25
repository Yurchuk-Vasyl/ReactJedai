import {
  HTTPS,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  GUIDE_IMG_EXT,
  URL_IMG_PERSON,
  SWAPI_PARAMS_PAGE,
} from '@constants/api';

export const getPeoplePageId = (url) => {
  const position = url.lastIndexOf(SWAPI_PARAMS_PAGE);
  const id = url.slice(position + SWAPI_PARAMS_PAGE.length);
  return Number(id);
};

const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '');
  return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);
export const getPeopleImage = (id) => `${URL_IMG_PERSON}${id}${GUIDE_IMG_EXT}`;
