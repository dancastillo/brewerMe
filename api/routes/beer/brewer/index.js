import { getAllBrewers } from './../axios';
import { getData } from '../../../utils/helpers';
import { SUCCESS_CODE, SERVER_ERROR_CODE, SERVER_ERROR_RESPONSE } from '../../../utils/statusCodes';

export const getBrewers = async (req, res, next) => {
  try {
    // API call
    const response = await getAllBrewers();

    // Handle response
    const data = getData(response);

    res.status(SUCCESS_CODE).send(data);
  } catch (error) {
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_RESPONSE);
  }
}
