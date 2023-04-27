import { PropTypes } from 'prop-types';
import { useState, useCallback } from 'react';
import { debounce } from 'lodash';

import SearchPageInfo from '@components/SearchPerson/SearchPageInfo/SearchPageInfo';
import UiInput from '@components/UI/UiInput/UiInput';

import { getApiResource } from '@utils/network';
import { getPeopleImage, getPeopleId } from '@services/getPeopleData';
import { withErrorApi } from '@hoc-helpers/withErrorApi';

import { API_SEARCH } from '@constants/api';

import styles from './SearchPage.module.css';
const SearchPage = ({ setErrorApi }) => {
  const [inputValue, setInputValue] = useState('');
  const [people, setPeople] = useState([]);

  const onSubmitRemove = () => {
    if (!inputValue) {
      return false;
    }
    setInputValue('');
    setPeople([]);
  };

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          img,
          name,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    //getResponse(inputValue);
    debouncedGetResponse(value);
  };
  return (
    <>
      <h1 className="header__text">Search</h1>
      <UiInput
        placeholder="write your person"
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        classes={styles.input__search}
        onSubmitRemove={onSubmitRemove}
      />

      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  withErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
