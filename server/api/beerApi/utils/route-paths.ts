import { objectToQueryParam } from "../../utils/object-to-query-param-string";

import { QUERY_PARAMS } from "../constants/query-params";
import { ROUTE_PATHS } from "../constants/routes";

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
    objectToQueryParam(
        ROUTE_PATHS.GET_LOCATION_NEARBY,
        {
            [QUERY_PARAMS.LATITUDE]: `${latitude}`,
            [QUERY_PARAMS.LONGITUDE]: `${longitude}`
        }
    );
