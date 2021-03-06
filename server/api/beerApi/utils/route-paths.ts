import { objectToQueryParam } from '../../utils/object-to-query-param-string';

import { QUERY_PARAMS } from '../constants/query-params';
import { ROUTE_PATHS } from '../constants/routes';

import '../../../lib/env';
import { encodeLocationQueryParam } from '../../../utils/encode-query-param';

const key: string = process.env.LOCATION_API_KEY || '';
const apiUrl: string  = process.env.LOCATION_API || '';

/**
 * @return string
 */
export const
    getBeerRoute = (): string =>
    objectToQueryParam(ROUTE_PATHS.GET_BEER, {[QUERY_PARAMS.COUNT]: QUERY_PARAMS.COUNT_100});

/**
 * @param {string} id
 * @return string
 */
export const getBeerByIdRoute = (id: string): string => `${ROUTE_PATHS.GET_BEER}/${id}`;

/**
 * @return string
 */
export const getBreweryRoute = (): string =>
    objectToQueryParam(ROUTE_PATHS.GET_BREWERY, {[QUERY_PARAMS.COUNT]: QUERY_PARAMS.COUNT_100});

/**
 * @param {string} id
 * @return string
 */
export const getBreweryByIdRoute = (id: string): string => `${ROUTE_PATHS.GET_BREWERY}/${id}`;

/**
 * @param {string} id
 * @return string
 */
export const getLocationByIdRoute = (id: string): string => `${ROUTE_PATHS.GET_LOCATION}/${id}`;

/**
 * @param {number} latitude
 * @param {number} longitude
 * @return string
 */
export const getLocationsNearbyRoute = (latitude: number, longitude: number): string =>
    /**
     * TODO added query param for search radius
     */
    objectToQueryParam(
        ROUTE_PATHS.GET_LOCATION_NEARBY,
        {
            [QUERY_PARAMS.LATITUDE]: `${latitude}`,
            [QUERY_PARAMS.LONGITUDE]: `${longitude}`,
            [QUERY_PARAMS.SEARCH_RADIUS]: '50'
        }
    );

export const getLocationApiRoute = (address: string): string => {
    address = encodeLocationQueryParam(address);
    const urlObject = { address, key };

    return objectToQueryParam(apiUrl, urlObject);
};
