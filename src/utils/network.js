/**
 * SEND request
 * @param {String} url - url for accept
 * @returns {Promise} - return Promise with result
 */

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    console.log(res.json);
    return await res.json();
  } catch (error) {
    console.log(error);
    return false;
  }
};

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();
