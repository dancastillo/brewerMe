import { IAddress } from "../api/beerApi/interfaces/IAddress";
import { IBeer } from "../api/beerApi/interfaces/IBeer";
import { ILocation } from "../api/beerApi/interfaces/ILocation";
import { IBrewery } from "../api/beerApi/interfaces/IBrewery";

export interface IApiResponse {
    data: IAddress|IBeer|ILocation|IBrewery;
    status: number;
    statusText: string;
}
