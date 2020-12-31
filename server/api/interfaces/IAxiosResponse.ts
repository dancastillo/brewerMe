import { AxiosResponse } from 'axios';
import { IBeer } from '../beerApi/interfaces/IBeer';
import { IBrewery } from '../beerApi/interfaces/IBrewery';
import { ILocation } from '../beerApi/interfaces/ILocation';

export interface IAxiosResponse extends AxiosResponse{
    data: IBeer|IBrewery|ILocation;
}
