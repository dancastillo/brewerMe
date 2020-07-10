import { Request, Response } from "express";
import { getLocationById, getLocationsNearby } from "../api/beerApi/api";
import { IAxiosResponse } from "../api/beerApi/interfaces/IAxiosResponse";
import { handleAxiosResponse } from "../utils/handle-axios-response";
import { IApiResponse } from "../interfaces/IApiResponse";

/**
 * @param {Request} req
 * @param {Response} res
 * @return Response
 */
export const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const results: IAxiosResponse = await getLocationById(id);
        const response: IApiResponse = handleAxiosResponse(results);

        res.send(response);
    } catch (err) {
        console.log(err);
    }
};

/**
 * @param {Request} req
 * @param {Response} res
 * @return Response
 */
export const getNearby = async (req: Request, res: Response) => {
    try {
        const { latitude, longitude } = req.params;
        const results: IAxiosResponse = await getLocationsNearby(+latitude, +longitude);
        const response: IApiResponse = handleAxiosResponse(results);

        res.send(response);
    } catch (err) {
        console.log(err);
    }
};
