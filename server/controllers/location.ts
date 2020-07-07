import { Request, Response } from "express";
/**
 * @param {Request} req
 * @param {Response} res
 * @return Response
 */
export const getLocation = (req: Request, res: Response) => {
    res.send("get nearby locations");
};

/**
 * @param {Request} req
 * @param {Response} res
 * @return Response
 */
export const getLocationById = (req: Request, res: Response) => {
    res.send("get location by id");
};
