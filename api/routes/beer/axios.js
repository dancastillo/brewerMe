import axios from 'axios';
import { BEER_API, BEER_API_KEY} from './../../../env.json';

export const options = {
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  }
};

// Location Urls
export const LOCATION_URL = '/location/nearby';
export const LOCATION_URL = '/location';

// Brewer Urls
export const BREWER_URL = '/brewer';
export const GET_BREWER_URL = (id) => `/brewer/${id}`;
export const COUNT_BREWER_URL = '/brewer/count';
export const BEERS_BY_BREWER_URL = (brewerId) => `/brewer/${brewerId}/beer`;
export const LOCATIONS_BY_BREWER_URL  = (brewerId) => `/brewer/${brewerId}/locations`;

// Beer Urls
export const BEER_URL = '/beer';
export const GET_BEER_URL = (beerId) => `/beer/${beerId}`;
export const COUNT_BEER_URL = '/beer/count';

axios.defaults.baseURL = BEER_API;
const apiKey = Buffer.from(`${BEER_API_KEY}:`).toString('base64');
axios.defaults.headers.common['Authorization'] = `Basic ${apiKey}`;

export default axios;

