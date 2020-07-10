import { IAddress } from "./IAddress";

export interface ILocation {
    id: string;
    object: string;
    name: string;
    brewer_id: string;
    url: string;
    country_code: string;
    country_short_name: string;
    latitude?: number; // float
    longitude?: number; // float
    telephone?: number;
    address?: IAddress;
}
