import { Request, Response } from "express";

/**
 * @param {Request} req
 * @param {Response} res
 * @return void
 */
export const getBrewery = (req: Request, res: Response) => {
    res.send("get 100 breweries");
};

/**
 * @param {Request} req
 * @param {Response} res
 * @return void
 */
export const getBreweryById = (req: Request, res: Response) => {
    res.send("get brewery by id");
};
