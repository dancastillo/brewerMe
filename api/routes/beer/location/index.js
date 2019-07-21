import { getLongLat } from "../../geolocation";
import { getData } from "../../../utils/helpers";
import { SUCCESS_CODE, SERVER_ERROR_CODE, SERVER_ERROR_RESPONSE } from "../../../utils/statusCodes";
import { getNearByLocationsUrl } from "./getUrl";
import {addAddressToLocation, addLocation, getNearByLocations, retrieve} from "./location";

/**
 * Return lat, long for a given address
 * @param req
 * @param res
 */
export const getNearby = async (req, res) => {
  try {
    // Get address from query parameters
    const { address, radius } = req.query;

    // Make API call to get lat/lng
    const results = await getLongLat(address);

    // Handle response
    const { data } = results;

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
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const getById = async (req, res) => {
  try {
    const { id } = req.query;
    const results = await retrieve(id);

    res.status(SUCCESS_CODE).send(results);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const add = async (req, res) => {
  try {
    const results = await addLocation(req.body);

    res.status(SUCCESS_CODE).send(results);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const addAddress = async (req, res) => {
  try {
    const params = req.body;
    const { id } = params;
    const results = await addAddressToLocation(id, params);

    res.status(SUCCESS_CODE).send(results);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};