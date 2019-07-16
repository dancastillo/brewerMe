import { getLongLat } from "../../geolocation";
import { getNearByLocations } from './../axios';
import { getData } from "../../../utils/helpers";
import { SUCCESS_CODE, SERVER_ERROR_CODE, SERVER_ERROR_RESPONSE } from "../../../utils/statusCodes";
import { getNearByLocationsUrl } from "./getUrl";
import { addLocationRequest } from "./location";

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
    const locationData = getData(nearbyResults);

    res.status(SUCCESS_CODE).send(locationData);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE)
  }
}

export const addLocation = async (req, res) => {
  try {
    const results = await addLocationRequest(req.body);

    res.status(SUCCESS_CODE).send(results);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
}