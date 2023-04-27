import { useSelector } from 'react-redux';
import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';

import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto/PersonPhoto';
import PersonBack from '@components/PersonPage/PersonBack/PersonBack';
import Preloader from '@components/UI/Preloader/Preloader';

import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { GetDynamicParams } from '@hooks/getDynamicParams';
import { API_PERSON } from '@constants/api';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() =>
  import('@components/PersonPage/PersonFilms/PersonFilms')
);

const PersonPage = ({ setErrorApi }) => {
  // const [personId, setPersonId] = useState();
  const [personInfo, setPersnoInfo] = useState();
  const [personName, setPersonName] = useState();
  const [personPhoto, setPersonPhoto] = useState();
  const [personFilms, setPersonFilms] = useState();
  const [personFavorite, setPersonFavorite] = useState(false);

  const [idPerson, setIdPerson] = useState();

  const storeData = useSelector((state) => state.favoriteReducer);

  const id = GetDynamicParams('id');
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
      if (res?.name) {
        setPersnoInfo([
          {
            title: 'Height',
            data: res.height,
          },
          {
            title: 'Mass',
            data: res.mass,
          },
          {
            title: 'Hair Color',
            data: res.hair_color,
          },
          {
            title: 'Skin Color',
            data: res.skin_color,
          },
          {
            title: 'Eye Color',
            data: res.eye_color,
          },
          {
            title: 'Birth Year',
            data: res.birth_year,
          },
          {
            title: 'Gender',
            data: res.gender,
          },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        setIdPerson(id);
        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [setErrorApi, id]);
  return (
    <>
      <PersonBack>Go Back</PersonBack>
      <div className={styles.person__wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.person__container}>
          <PersonPhoto
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
            personId={id}
            personPhoto={personPhoto}
            personName={personName}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<Preloader theme="white" isShadow classes />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
  id: PropTypes.string,
};

export default withErrorApi(PersonPage);
