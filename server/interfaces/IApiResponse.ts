import { IAddress } from "../api/beerApi/interfaces/IAddress";
import { IBeer } from "../api/beerApi/interfaces/IBeer";
import { ILocation } from "../api/beerApi/interfaces/ILocation";
import { IBrewery } from "../api/beerApi/interfaces/IBrewery";
import { ILocationResponse } from "../api/locationApi/interfaces/ILocationResponse";
import { IBreweries } from "../api/beerApi/interfaces/IBreweries";

export interface IApiResponse {
    data: IAddress|IBeer|ILocation|IBrewery|ILocationResponse|IBreweries[];
    status: number;
    statusText: string;
}

export interface IApiLocationResponse {
    data: ILocationResponse;
    status: number;
    statusText: string;
}
