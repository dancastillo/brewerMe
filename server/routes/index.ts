import { Request, Response, Router } from "express";
import * as location from "../controllers/location";
import * as brewery from "../controllers/brewery";
import * as beer from "../controllers/beer";

const router: Router = Router();

router.get("/location",  location.getLocation);
router.get("/location/:id",  location.getLocationById);
router.get("/brewery",  brewery.getBrewery);
router.get("/brewery/:id",  brewery.getBreweryById);
router.get("/beer",  beer.getBeers);
router.get("/beer/:id",  beer.getBeerById);

/**
 * @param {Request} req
 * @param {Response} res
 * @return void
 */
router.get("/hello", (req: Request, res: Response): void => {
    res.send("hello welcome to the api");
});

export default router;
