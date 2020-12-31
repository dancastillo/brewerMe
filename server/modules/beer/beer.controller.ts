import { handleErrorResponse } from '../../api/beerApi/utils/handle-error-response';
import { IAxiosResponse } from '../../api/interfaces/IAxiosResponse';
import { ApiController } from '../../controllers/api.controller';
import { IApiResponse } from '../../interfaces/IApiResponse';
import { handleAxiosResponse } from '../../utils/handle-axios-response';
import { BeerService } from './beer.service';

export class BeerController extends ApiController {

  private service: BeerService;

  constructor(service: BeerService) {
    super();
    this.service = service;
  }
  /**
   * @return Response
   */
  get = async () => {
    try {
      const results: IAxiosResponse = await this.service.getBeers();
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
      const results: IAxiosResponse = await this.service.getBeerById(id);
      const response: IApiResponse = handleAxiosResponse(results);

      this.ok(response);
    } catch (err) {
      handleErrorResponse(err);
      this.fail(err);
    }
  };

}
