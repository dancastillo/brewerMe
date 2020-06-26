import { Request, Response, Router } from "express";
import * as location from "../controllers/location";

const router: Router = Router();

router.get("/location",  location.getLocation);

/**
 * @param {Request} req
 * @param {Response} res
 * @return void
 */
router.get("/hello", (req: Request, res: Response): void => {
    res.send("hello welcome to the api");
});

export default router;
