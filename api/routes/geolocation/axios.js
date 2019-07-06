import axios from 'axios';
import { GEOLOCATION_API, GEOLOCATION_API_KEY } from './../../../env.json';

/**
 * @param string address 
 */
export const getUrl = (address) => {
  const loc = address.replace(" ", "+");

  return `${GEOLOCATION_API}?address=${loc}&key=${GEOLOCATION_API_KEY}`
};

export const geoAxios = axios;