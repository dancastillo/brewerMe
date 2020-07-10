import { Request, Response } from "express";
import { getBeers, getBeerById } from "../api/beerApi/api";
import { IAxiosResponse } from "../api/beerApi/interfaces/IAxiosResponse";
import { handleAxiosResponse } from "../utils/handle-axios-response";
import { IApiResponse } from "../interfaces/IApiResponse";

/**
 * @param {Request} req
 * @param {Response} res
 * @return Response
 */
export const get = async (req: Request, res: Response) => {
    try {
        const results: IAxiosResponse = await getBeers();
        const response: IApiResponse = handleAxiosResponse(results);

        res.send(response);
    } catch (err) {
        res.send(err);
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
        const results: IAxiosResponse = await getBeerById(id);
        const response: IApiResponse = handleAxiosResponse(results);

        res.send(response);
    } catch (err) {
        console.log(err);
    }
};
