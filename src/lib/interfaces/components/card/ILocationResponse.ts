import { IDistance } from "@interfaces/components/card/IDistance";
import { IBrewery } from "@interfaces/components/card/IBrewery";
import { ILocation } from "@interfaces/components/card/ILocation";

export interface ILocationResponse {
    location: ILocation;
    distance: IDistance;
    brewer: IBrewery;
}
