import axios from "axios";

import { config } from "./utils/config";
import { handleErrorResponse } from "./utils/handle-error-response";
import * as routePaths from "./utils/route-paths";
import { IAxiosResponse } from "./interfaces/IAxiosResponse";

export const getBeers = async (): Promise<IAxiosResponse> => {
    try {
        const url: string = routePaths.getBeerRoute();

        return await axios.get(url, config);
    } catch (err) {
        console.log(err);
        await handleErrorResponse(err);
    }

    throw Error;
};

export const getBeerById = async (id: string): Promise<IAxiosResponse> => {
    try {
        const url: string = routePaths.getBeerByIdRoute(id);

        return await axios.get(url, config);
    } catch (err) {
        await handleErrorResponse(err);
    }

    throw Error;
};

export const getBrewery = async (): Promise<IAxiosResponse> => {
    try {
        const url: string = routePaths.getBreweryRoute();

        return await axios.get(url, config);
    } catch (err) {
        await handleErrorResponse(err);
    }

    throw Error;
};

export const getBreweryById = async (id: string): Promise<IAxiosResponse> => {
    try {
        const url: string = routePaths.getBreweryByIdRoute(id);

        return await axios.get(url, config);
    } catch (err) {
        await handleErrorResponse(err);
    }

    throw Error;
};

export const getLocationById = async (id: string): Promise<IAxiosResponse> => {
    try {
        const url: string = routePaths.getLocationByIdRoute(id);

        return await axios.get(url, config);
    } catch (err) {
        await handleErrorResponse(err);
    }

    throw Error;
};

export const getLocationsNearby = async (latitude: number, longitude: number): Promise<IAxiosResponse> => {
    try {
        const url: string = routePaths.getLocationsNearbyRoute(latitude, longitude);

        return await axios.get(url, config);
    } catch (err) {
        await handleErrorResponse(err);
    }

    throw Error;
};
