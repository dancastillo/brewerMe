import axios, { LOCATION_URL } from './../axios';

/**
 * Get Nearby locations
 * @method get
 * @param {string} url 
 */
export const getNearByLocations = (url) => {
  return axios.get(url);
};

/**
 * Retrieve a location
 * @method get
 * @param {string} id
 */
export const retrieve = (id) => {
  return axios.get(`/location/${id}`);
};

/**
 * Add location
 * @method post
 * @param {object} params 
 */
export const addLocation = (params) => {
  console.log(params);
  const options = {
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    }
  };

  return axios.post(LOCATION_URL, params, options)
};

/**
 * Add address to existing location
 * @method post
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
};