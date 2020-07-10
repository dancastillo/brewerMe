import axios, { AxiosResponse } from "axios";

import { config } from "./utils/config";
import { IApiResponse } from "./interfaces/IApiResponse";
import { handleError, handleResponse } from "./utils/response";
import * as routePaths from "./constants/routes-paths";

export const getBeers = async (): Promise<IApiResponse> => {
    try {
        const url: string = routePaths.getBeerRoute();

        // console.log(httpClient);
        const response: AxiosResponse = await axios.get(url, config);

        return handleResponse(response);
    } catch (err) {
        console.log(err);
        await handleError(err);
    }

    throw Error;
};

export const getBeerById = async (id: string): Promise<IApiResponse> => {
    try {
        const url: string = routePaths.getBeerByIdRoute(id);
        const response: AxiosResponse = await axios.get(url, config);

        return handleResponse(response);
    } catch (err) {
        await handleError(err);
    }

    throw Error;
};

export const getBrewery = async (): Promise<IApiResponse> => {
    try {
        const url: string = routePaths.getBreweryRoute();
        const response: AxiosResponse = await axios.get(url, config);

        return handleResponse(response);
    } catch (err) {
        await handleError(err);
    }

    throw Error;
};

export const getBreweryById = async (id: string): Promise<IApiResponse> => {
    try {
        const url: string = routePaths.getBreweryByIdRoute(id);
        const response: AxiosResponse = await axios.get(url, config);

        return handleResponse(response);
    } catch (err) {
        await handleError(err);
    }

    throw Error;
};

export const getLocationById = async (id: string): Promise<IApiResponse> => {
    try {
        const url: string = routePaths.getLocationById(id);
        const response: AxiosResponse = await axios.get(url, config);

        return handleResponse(response);
    } catch (err) {
        await handleError(err);
    }

    throw Error;
};

export const getNearbyLocation = async (latitude: number, longitude: number): Promise<IApiResponse> => {
    try {
        const url: string = routePaths.getLocationNearby(latitude, longitude);
        const response: AxiosResponse = await axios.get(url, config);

        return handleResponse(response);
    } catch (err) {
        await handleError(err);
    }

    throw Error;
};
