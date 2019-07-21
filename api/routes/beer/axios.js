import axios from 'axios';
import { BEER_API, BEER_API_KEY} from './../../../env.json';

export const LOCATION_URL = '/location/nearby';
export const LOCATION_URL = '/location';
export const BREWER_URL = '/brewer';
export const GET_BREWER_URL = (id) => `/brewer/${id}`;
export const COUNT_BREWER_URL = '/brewer/count';
export const BEERS_BY_BREWER_URL = (brewerId) => `/brewer/${brewerId}/beer`;
export const LOCATIONS_BY_BREWER_URL  = (brewerId) => `/brewer/${brewerId}/locations`;

axios.defaults.baseURL = BEER_API;
const apiKey = Buffer.from(`${BEER_API_KEY}:`).toString('base64');
axios.defaults.headers.common['Authorization'] = `Basic ${apiKey}`;

/**
 * @method get
 */
export const getAllBeers = () => {
  return axios.get('/beer');
};

export default axios;

