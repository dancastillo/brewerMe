import axios from 'axios';
import { BEER_API, BEER_API_KEY} from './../../../env.json';

export const LOCATION_URL = '/location/nearby';

axios.defaults.baseURL = BEER_API;
const apiKey = Buffer.from(`${BEER_API_KEY}:`).toString('base64');
axios.defaults.headers.common['Authorization'] = `Basic ${apiKey}`;

/**
 * Beer API get nearby
 * @method get
 * @param string url 
 */
export const getNearByLocations = (url) => {
  return axios.get(url);
}

export default axios;

