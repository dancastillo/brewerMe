import axios from 'axios';

import { config } from '../../api/beerApi/utils/config';
import * as routePaths from '../../api/beerApi/utils/route-paths';
import { IAxiosResponse } from '../../api/interfaces/IAxiosResponse';

export class BeerService {

  getBeers = async (): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBeerRoute();

    return await axios.get(url, config);
  };

  getBeerById = async (id: string): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBeerByIdRoute(id);

    return await axios.get(url, config);
  };
}

