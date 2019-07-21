import { getData } from '../../../utils/helpers';
import { SUCCESS_CODE, SERVER_ERROR_CODE, SERVER_ERROR_RESPONSE } from '../../../utils/statusCodes';
import { addBrewer, beersByBrewer, countBrewers, getAllBrewers, locationsByBrewer, retrieveBrewer } from './brewer';

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const getAll = async (req, res) => {
  try {
    // API call
    const response = await getAllBrewers();

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
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
    // API call
    const response = await addBrewer(req.body);

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const retrieve = async (req, res) => {
  try {
    const { id } = req.query;
    // API call
    const response = await retrieveBrewer(id);

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const count = async (req, res) => {
  try {
    // API call
    const response = await countBrewers();

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const beers = async (req, res) => {
  try {
    const { id } = req.query;
    // API call
    const response = await beersByBrewer(id);

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const locations = async (req, res) => {
  try {
    const { id } = req.query;
    // API call
    const response = await locationsByBrewer(id);

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};
