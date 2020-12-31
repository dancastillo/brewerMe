import axios from 'axios';

import { config } from '../../api/beerApi/utils/config';
import * as routePaths from '../../api/beerApi/utils/route-paths';
import { IAxiosResponse } from '../../api/interfaces/IAxiosResponse';
import { HttpService } from '../../services/http.service';

export class BreweryService extends HttpService {

  constructor() {
    super(process.env.API_HOST);
  }

  getBrewery = async (): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBreweryRoute();

    return await this.instance.get(url, config);
  };

  getBreweryById = async (id: string): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBreweryByIdRoute(id);

    return await this.instance.get(url, config);
  };
}
