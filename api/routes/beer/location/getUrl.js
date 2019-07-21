import { LOCATION_URL } from "../axios";
import { setUpQueryParams } from "../../../utils/helpers";

/**
 * @param locObj
 * @param radius
 * @returns {string}
 */
export const getNearByLocationsUrl = (locObj, radius) => {

  const { lat, lng } = locObj;
  const queryParams = { latitude: lat, longitude: lng };

  // if radius is set then add to queryParams
  if (radius) {
    queryParams.radius = radius;
  }

  return setUpQueryParams(LOCATION_URL, queryParams);
};