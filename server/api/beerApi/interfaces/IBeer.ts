import { IBrewery } from './IBrewery';

export interface IBeer {
    id: string;
    object: string;
    name: string;
    style: string;
    description: string;
    abv: number; // float
    ibu: number;
    cb_verified: boolean;
    brewer_verified: boolean;
    brewer: IBrewery;
}
