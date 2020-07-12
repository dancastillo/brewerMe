import { Request, Response } from "express";
import { getLocationById, getLocationsNearby } from "../api/beerApi/api";
import { IAxiosResponse } from "../api/interfaces/IAxiosResponse";
import { handleAxiosResponse } from "../utils/handle-axios-response";
import { IApiResponse } from "../interfaces/IApiResponse";
import { ILocationResponse } from "../api/locationApi/interfaces/ILocationResponse";
import { getLocation } from "../api/locationApi/locationApi";

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

/**
 * @param {Request} req
 * @param {Response} res
 * @return Response
 */
export const getLatitudeLongitude = async (req: Request, res: Response) => {
    try {
        const { address } = req.query;

        if (typeof address === "string") {
            const results: IAxiosResponse = await getLocation(address);
            const response: IApiResponse = handleAxiosResponse(results);
            
            res.send(response.data);
        } else {
            throw Error('Query Param "address" should be a string');
        }
    } catch (err) {
        console.log(err);
    }
}
