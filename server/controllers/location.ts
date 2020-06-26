import { Request, Response } from "express";

/**
 * @param {Request} req
 * @param {Response} res
 * @return void
 */
export const getLocation = (req: Request, res: Response): void => {
    res.send("location api page");
};
