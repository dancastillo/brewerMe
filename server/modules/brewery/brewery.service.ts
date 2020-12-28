import axios from 'axios';

import { config } from '../../api/beerApi/utils/config';
import * as routePaths from '../../api/beerApi/utils/route-paths';
import { IAxiosResponse } from '../../api/interfaces/IAxiosResponse';

export class BreweryService {

  getBrewery = async (): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBreweryRoute();

    return await axios.get(url, config);
  };

  getBreweryById = async (id: string): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBreweryByIdRoute(id);

    return await axios.get(url, config);
  };
}
