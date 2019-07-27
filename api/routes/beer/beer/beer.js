import axios, { options, BEER_URL, GET_BEER_URL, COUNT_BEER_URL } from './../axios';

/**
 * @returns object
 */
export const getAllBeers = () => {
  return axios.get(BEER_URL);
};

/**
 * @param beerObj
 * @returns object
 */
export const addBeer = (beerObj) => {
  return axios.post(BEER_URL, beerObj, options);
};

/**
 *
 * @param id
 * @returns object
 */
export const retrieveBeer = (id) => {
  return axios.get(GET_BEER_URL(id));
};

/**
 * @returns object
 */
export const countBeer = () => {
  return axios.get(COUNT_BEER_URL);
};
