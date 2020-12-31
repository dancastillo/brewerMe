import { handleErrorResponse } from '../../api/beerApi/utils/handle-error-response';
import { IAxiosResponse } from '../../api/interfaces/IAxiosResponse';
import { ApiController } from '../../controllers/api.controller';
import { IApiResponse } from '../../interfaces/IApiResponse';
import { handleAxiosResponse } from '../../utils/handle-axios-response';
import { BreweryService } from './brewery.service';

export class BreweryController extends ApiController {

  service: BreweryService;

  constructor(service: BreweryService) {
    super();
    this.service = service;
  }

  /**
   * @return Response
   */
  get = async () => {
    try {
      const results: IAxiosResponse = await this.service.getBrewery();
      const response: IApiResponse = handleAxiosResponse(results);

      this.ok(response);
    } catch (err) {
      handleErrorResponse(err);
      this.fail(err);
    }
  };

  /**
   * @return Response
   */
  getById = async () => {
    try {
      const { id } = this.req.params;
      const results: IAxiosResponse = await this.service.getBreweryById(id);
      const response: IApiResponse = handleAxiosResponse(results);

      this.ok(response);
    } catch (err) {
      handleErrorResponse(err);
      this.fail(err);
    }
  };
}
