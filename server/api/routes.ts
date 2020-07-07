import httpClient, { handleError, handleResponse } from "./httpClient";
import { IApiResponse } from "./interface/IApiResponse";
import { AxiosResponse } from "axios";

export const apiGetBeers = async (): Promise<IApiResponse> => {
    try {
        const url: string = "/beer?count=100";
        const response: AxiosResponse = await httpClient.get(url);

        return handleResponse(response);
    } catch (err) {
        handleError(err);
    }

    throw Error;
};

export const apiGetBeerById = async (id: string): Promise<IApiResponse> => {
    try {
        const url: string = `/beer/${id}`;
        const response: AxiosResponse = await httpClient.get(url);

        return handleResponse(response);
    } catch (err) {
        handleError(err);
    }

    throw Error;
};

