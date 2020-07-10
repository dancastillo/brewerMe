import axios from "axios";

import { config } from "./utils/config";
import * as routePaths from "./utils/route-paths";
import { IAxiosResponse } from "./interfaces/IAxiosResponse";

export const getBeers = async (): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBeerRoute();

    return await axios.get(url, config);
};

export const getBeerById = async (id: string): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBeerByIdRoute(id);

    return await axios.get(url, config);
};

export const getBrewery = async (): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBreweryRoute();

    return await axios.get(url, config);
};

export const getBreweryById = async (id: string): Promise<IAxiosResponse> => {
    const url: string = routePaths.getBreweryByIdRoute(id);

    return await axios.get(url, config);
};

export const getLocationById = async (id: string): Promise<IAxiosResponse> => {
    const url: string = routePaths.getLocationByIdRoute(id);

    return await axios.get(url, config);
};

export const getLocationsNearby = async (latitude: number, longitude: number): Promise<IAxiosResponse> => {
    const url: string = routePaths.getLocationsNearbyRoute(latitude, longitude);

    return await axios.get(url, config);
};
