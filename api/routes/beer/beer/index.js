import { getAllBeers } from './../axios';
import { SERVER_ERROR_CODE, SERVER_ERROR_RESPONSE, SUCCESS_CODE } from '../../../utils/statusCodes';
import { getData } from '../../../utils/helpers';

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
}