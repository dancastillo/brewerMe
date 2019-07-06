import { getLongLat } from "../../geolocation";
import axios, { LOCATION_URL, getNearByLocations } from './../axios';
import { setUpQueryParams, getData } from "../../../utils/helpers";

/**
 * Return lat, long for a given address
 * @param object req 
 * @param object res 
 */
export const getLocation = async (req, res) => {
  try {
    // Get address from query parameters
    const { address, radius } = req.query;

    // Make API call to get lat/lng
    const results = await getLongLat(address);

    // Handle response
    const { status, data } = results;

    // Get formatted url w/ query params
    const url = getNearByLocationsUrl(data, radius);

    // API 
    const nearbyResults = await getNearByLocations(url);
  
    // get data from results
    const data = getData(nearbyResults);

    res.status(status).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

/**
 * @param object locObj 
 * @param null|integer radius 
 */
const getNearByLocationsUrl = (locObj, radius) => {

  const { lat, lng } = locObj;
  const queryParams = { latitude: lat, longtude: lng };

  // if radius is set then add to queryParams
  if (radius) {
    queryParams.radius = radius;
  }

  return setUpQueryParams(LOCATION_URL, queryParams);
}

