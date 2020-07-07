import { Request, Response } from "express";

/**
 * @param {Request} req
 * @param {Response} res
 * @return Response
 */
export const getBeers = (req: Request, res: Response) => {
    res.send("get 100 beers");
};

/**
 * @param {Request} req
 * @param {Response} res
 * @return Response
 */
export const getBeerById = (req: Request, res: Response) => {
    res.send("get beer by id");
};
