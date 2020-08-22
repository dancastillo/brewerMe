import { Request, Response } from "express";
import { getLocationById } from "../api/beerApi/api";
import { IAxiosResponse } from "../api/interfaces/IAxiosResponse";
import { handleAxiosResponse } from "../utils/handle-axios-response";
import { IApiResponse } from "../interfaces/IApiResponse";
import { encodeLocationQueryParam } from "../utils/encode-query-param";
import { ICoordinates } from "../interfaces/ICoordinates";
import { getLocationAddress, getNearbyByLatLng } from "../utils/location";

/**
 * @param {Request} req
 * @param {Response} res
 * @return Response
 */
export const get = async (req: Request, res: Response) => {
    try {
        const { city, state } = req.query;
        const address = encodeLocationQueryParam(`${city}, ${state}`);

        const coordinates: ICoordinates = await getLocationAddress(address);
        const response: IApiResponse = await getNearbyByLatLng(coordinates.lat, coordinates.lng);

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
        const response = await getNearbyByLatLng(+latitude, +longitude);

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
            const result = await getLocationAddress(address);
            res.send(result);
        } else {
            throw Error("Query Param 'address' should be a string");
        }
    } catch (err) {
        console.log(err);
    }
};
