import { LocationType } from "../constants/location-type";

interface IAddressComponents {
    long_name: string;
    short_name: string;
    types: string[];
}

interface ILocation {
    lat: number;
    lng: number;
}

interface IBounds {
    northeast: ILocation;
    southwest: ILocation;
}

interface IGeometry {
    bounds?: IBounds;
    location: ILocation;
    location_type: LocationType;
    viewport: IBounds;
}

export interface ILocationResults {
    types: string[];
    formatted_address: string;
    address_components: IAddressComponents[];
    postcode_localities?: [];
    geometry: IGeometry;
    plus_code?: number;
    partial_match?: string;
    place_id: string;
}
