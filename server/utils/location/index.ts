import { ICoordinates } from "../../interfaces/ICoordinates";
import { IAxiosResponse } from "../../api/interfaces/IAxiosResponse";
import { getLocation } from "../../api/locationApi/locationApi";
import { IApiLocationResponse } from "../../interfaces/IApiResponse";
import { handleAxiosResponse, handleAxiosResponseFromGeoLocation } from "../handle-axios-response";
import { getCoordinates } from "../get-coordinates";
import { getLocationsNearby } from "../../api/beerApi/api";

export /**
 * @param {string} address
 * @return {Promise<ICoordinates>}
 */
const getLocationAddress = async (address: string): Promise<ICoordinates> => {
    const results: IAxiosResponse = await getLocation(address);
    const response: IApiLocationResponse = handleAxiosResponseFromGeoLocation(results);

    return getCoordinates(response.data);
};

/**
 *
 * @param {number} lat
 * @param {number} lng
 * @return {IApiResponse}
 */
export const getNearbyByLatLng = async (lat: number, lng: number) => {
    const results: IAxiosResponse = await getLocationsNearby(lat, lng);
    return handleAxiosResponse(results);
};
