import axios from 'axios';

import { objectToQueryParam } from '../utils/object-to-query-param-string';
import { IAxiosResponse } from '../interfaces/IAxiosResponse';
import { encodeLocationQueryParam } from '../../utils/encode-query-param';

import '../../lib/env';
const key: string = process.env.LOCATION_API_KEY || '';
const apiUrl: string  = process.env.LOCATION_API || '';

export const getLocation = async (address: string): Promise<IAxiosResponse> => {
    address = encodeLocationQueryParam(address);
    const urlObject = { address, key };
    const url = objectToQueryParam(apiUrl, urlObject);

    return await axios.get(url);
};
