import { ILocationResponse } from "../api/locationApi/interfaces/ILocationResponse";

export const getCoordinates = (location: ILocationResponse): { lat: number, lng: number } => {
    return location.results[0]?.geometry.location;
};
