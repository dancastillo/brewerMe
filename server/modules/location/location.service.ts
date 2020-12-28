import axios from 'axios';
import { config } from '../../api/beerApi/utils/config';
import * as routePaths from '../../api/beerApi/utils/route-paths';
import { IAxiosResponse } from '../../api/interfaces/IAxiosResponse';
import { ILocationResponse } from '../../api/locationApi/interfaces/ILocationResponse';
import { getLocation } from '../../api/locationApi/locationApi';
import { IApiLocationResponse } from '../../interfaces/IApiResponse';
import { ICoordinates } from '../../interfaces/ICoordinates';
import { encodeLocationQueryParam } from '../../utils/encode-query-param';
import { handleAxiosResponse, handleAxiosResponseFromGeoLocation } from '../../utils/handle-axios-response';

export class LocationService {

  getLocationById = async (id: string): Promise<IAxiosResponse> => {
    const url: string = routePaths.getLocationByIdRoute(id);

    return await axios.get(url, config);
  };

  getLocationsNearby = async (latitude: number, longitude: number): Promise<IAxiosResponse> => {
    const url: string = routePaths.getLocationsNearbyRoute(latitude, longitude);

    return await axios.get(url, config);
  };

  getLocationAddress = async (address: string): Promise<ICoordinates> => {
    const results: IAxiosResponse = await getLocation(address);
    const response: IApiLocationResponse = handleAxiosResponseFromGeoLocation(results);

    return this.getCoordinates(response.data);
  };

  getNearbyByLatLng = async (lat: number, lng: number) => {
    const results: IAxiosResponse = await this.getLocationsNearby(lat, lng);
    return handleAxiosResponse(results);
  };

  getCoordinates = (location: ILocationResponse): { lat: number, lng: number } => {
    return location.results[0]?.geometry.location;
  };

  getLocationUrl = (address: string) => {
    const locationApi = process.env.LOCATION_API || '';
    const locationApiKey = process.env.LOCATION_API_KEY || '';
    const loc = encodeLocationQueryParam(address);

    return `${locationApi}?address=${loc}&key=${locationApiKey}`;
  };

}
