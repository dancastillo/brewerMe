import { AxiosResponse } from "axios";
import { IBeer } from "./IBeer";
import { IBrewery } from "./IBrewery";
import { ILocation } from "./ILocation";

export interface IAxiosResponse extends AxiosResponse{
    data: IBeer|IBrewery|ILocation;
}
