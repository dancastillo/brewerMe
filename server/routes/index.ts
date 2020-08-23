import { Router } from "express";

import { RouterPaths } from "./constants/router-paths";

import * as location from "../controllers/location";
import * as brewery from "../controllers/brewery";
import * as beer from "../controllers/beer";

const routes: Router = Router();

// Beer routes
routes.get(RouterPaths.BEER,  beer.get);
routes.get(RouterPaths.BEER_ID,  beer.getById);

// Brewery routes
routes.get(RouterPaths.BREWERY,  brewery.get);
routes.get(RouterPaths.BREWERY_ID,  brewery.getById);

// Location routes
routes.get(RouterPaths.LOCATION,  location.get);
routes.get(RouterPaths.LOCATION_ID,  location.getById);
routes.get(RouterPaths.LOCATION_NEARBY,  location.getNearby);

// Get Location route
routes.get(RouterPaths.GET_LOCATION, location.getLatitudeLongitude);

export default routes;
