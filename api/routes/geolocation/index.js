import { geoAxios, getUrl } from './axios';
import { getLatLong } from '../../utils/helpers';

/**
 * Get lat and long from API from address
 * @param string address 
 * @return object
 */
export const getLongLat = async (address) => {
  // Get formatted url
  const url = getUrl(address);

  // Geo API response
  const response = await geoAxios.get(url);
  
  // Handle response
  const results = getLatLong(response);
  const { status, data } = results;

  return { status, data };
}