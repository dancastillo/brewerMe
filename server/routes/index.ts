import { Router } from "express";

import * as location from "../controllers/location";
import * as brewery from "../controllers/brewery";
import * as beer from "../controllers/beer";

const routes: Router = Router();

// Location routes
routes.get("/location",  location.getLocation);
routes.get("/location/:id",  location.getLocationById);

// Brewery routes
routes.get("/brewery",  brewery.getBrewery);
routes.get("/brewery/:id",  brewery.getBreweryById);

// Beer routes
routes.get("/beer",  beer.getBeers);
routes.get("/beer/:id",  beer.getBeerById);

export default routes;
