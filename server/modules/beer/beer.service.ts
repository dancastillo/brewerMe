import axios from 'axios';

import { config } from '../../api/beerApi/utils/config';
import * as routePaths from '../../api/beerApi/utils/route-paths';
import { IAxiosResponse } from '../../api/interfaces/IAxiosResponse';
import { HttpService } from '../../services/http.service';

export class BeerService extends HttpService {

  constructor() {
    super(process.env.API_HOST);
  }

  getBeers = async (): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBeerRoute();

    return await this.instance.get(url, config);
  };

  getBeerById = async (id: string): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBeerByIdRoute(id);

    return await this.instance.get(url, config);
  };
}

