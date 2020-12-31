import { IAxiosResponse } from '../../api/interfaces/IAxiosResponse';
import { ApiController } from '../../controllers/api.controller';
import { IApiResponse } from '../../interfaces/IApiResponse';
import { ICoordinates } from '../../interfaces/ICoordinates';
import { encodeLocationQueryParam } from '../../utils/encode-query-param';
import { handleAxiosResponse } from '../../utils/handle-axios-response';
// import { getLocationAddress, getNearbyByLatLng } from '../../utils/location';
import { LocationService } from './location.service';

export class LocationController extends ApiController {

  service: LocationService;

  constructor(service: LocationService) {
    super();
    this.service = service;
  }

  /**
   * @return Response
   */
  get = async () => {
    try {
      const { city, state } = this.req.query;
      const address = encodeLocationQueryParam(`${city}, ${state}`);

      const coordinates: ICoordinates = await this.service.getLocationAddress(address);
      const response: IApiResponse = await this.service.getNearbyByLatLng(coordinates.lat, coordinates.lng);

      this.ok(response);
    } catch (err) {
      this.fail(err);
    }
  };

  /**
   * @return Response
   */
  getById = async () => {
    try {
      const { id } = this.req.params;
      const results: IAxiosResponse = await this.service.getLocationById(id);
      const response: IApiResponse = handleAxiosResponse(results);

      this.ok(response);
    } catch (err) {
      this.fail(err);
    }
  };

  /**
   * @return Response
   */
  getNearby = async () => {
    try {
      const { latitude, longitude } = this.req.params;
      const response = await this.service.getNearbyByLatLng(+latitude, +longitude);

      this.ok(response);
    } catch (err) {
      this.fail(err);
    }
  };

  /**
   * @return Response
   */
  getLatitudeLongitude = async () => {
    try {
      const { address } = this.req.query;

      if (typeof address === 'string') {
        const result = await this.service.getLocationAddress(address);
        this.ok(result);
      } else {
        throw new Error(`Query Param: should be a string`);
      }
    } catch (err) {
      this.fail(err);
    }
  };

}
