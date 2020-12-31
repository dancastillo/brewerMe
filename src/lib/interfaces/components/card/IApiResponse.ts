import { IBeer } from '@interfaces/components/card/IBeer';
import { IBrewery } from '@interfaces/components/card/IBrewery';
import { IBreweries } from '@interfaces/components/card/IBreweries';

export interface IApiResponse {
    data: IBeer|IBrewery|IBeer[]|IBreweries;
    status: number;
    statusText: string;
}
