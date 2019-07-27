import { SERVER_ERROR_CODE, SERVER_ERROR_RESPONSE, SUCCESS_CODE } from '../../../utils/statusCodes';
import { getData } from '../../../utils/helpers';
import { addBeer, countBeer, getAllBeers, retrieveBeer } from './beer';

/**
 * Get all beers
 * @param object req 
 * @param object res 
 */
export const getBeers = async (req, res) => {
  try {
    // API call
    const response = await getAllBeers();

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};

/**
 * @param object req
 * @param object res
 */
export const add = async (req, res) => {
  try {
    // API call
    const response = await addBeer(req.body);

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};

/**
 * @param object req
 * @param object res
 */
export const retrieve = async (req, res) => {
  try {
    const { id } = req.query;
    // API call
    const response = await retrieveBeer(id);

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};

/**
 * @param object req
 * @param object res
 */
export const count = async (req, res) => {
  try {
    // API call
    const response = await countBeer();

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
};