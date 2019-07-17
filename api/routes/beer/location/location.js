import axios, { LOCATION_URL } from './../axios';

/**
 * Get Nearby locations
 * @param {string} url 
 */
export const getNearByLocations = (url) => {
  return axios.get(url);
}

/**
 * Add location
 * @param {object} params 
 */
export const add = (params) => {
  console.log(params);
  const options = {
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    }
  };

  return axios.post(LOCATION_URL, params, options)
}


/**
 * Retrieve a location
 * @param {string} locationId 
 */
export const retrieve = (locationId) => {
  return axios.get(`/location/${locationId}`);
}

/**
 * Add address to exisiting location
 * @param {string} locationId 
 * @param {object} params 
 */
export const addAddressToLocation = (locationId, params) => {
  const options = {
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    }
  };

  axios.post(`${LOCATION_URL}/${locationId}`, params, options);
}