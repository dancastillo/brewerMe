import { Request, Response } from "express";
import { getBrewery, getBreweryById } from "../api/beerApi/api";
import { IAxiosResponse } from "../api/beerApi/interfaces/IAxiosResponse";
import { IApiResponse } from "../interfaces/IApiResponse";
import { handleAxiosResponse } from "../utils/handle-axios-response";

/**
 * @param {Request} req
 * @param {Response} res
 * @return Response
 */
export const get = async (req: Request, res: Response) => {
    try {
        const results: IAxiosResponse = await getBrewery();
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
export const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const results: IAxiosResponse = await getBreweryById(id);
        const response: IApiResponse = handleAxiosResponse(results);

        res.send(response);
    } catch (err) {
        console.log(err);
    }
};
