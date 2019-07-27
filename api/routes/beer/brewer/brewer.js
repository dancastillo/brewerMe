import axios,
{
  options,
  BEERS_BY_BREWER_URL,
  BREWER_URL, COUNT_BREWER_URL,
  GET_BREWER_URL,
  LOCATIONS_BY_BREWER_URL
} from './../axios';

/**
 * Beer API get brewers
 * @methods get
 */
export const getAllBrewers = () => {
  return axios.get('/brewer');
};

/**
 * @param brewerObj
 * @returns {object}
 */
export const addBrewer = (brewerObj) => {
  return axios.post(BREWER_URL, brewerObj, options);
};

/**
 *
 * @param id
 * @returns {object}
 */
export const retrieveBrewer = (id) => {
  return axios.get(GET_BREWER_URL(id));
};

/**
 * @returns {object}
 */
export const countBrewers = () => {
  return axios.get(COUNT_BREWER_URL);
};

/**
 *
 * @param id
 * @returns object
 */
export const beersByBrewer = (id) => {
  return axios.get(BEERS_BY_BREWER_URL(id));
};

/**
 * @param id
 * @returns {*}
 */
export const locationsByBrewer = (id) => {
  return axios.get(LOCATIONS_BY_BREWER_URL(id));
};