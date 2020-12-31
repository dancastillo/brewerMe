import { Router } from 'express';

import { RouterPaths } from './constants/router-paths';

import { locationRouter } from '../modules/location/location.router';
import { breweryRouter } from '../modules/brewery/brewery.router';
import { beerRouter } from '../modules/beer/beer.router';

const routes: Router = Router();

// Beer routes
routes.use(RouterPaths.BEER,  beerRouter);

// Brewery routes
routes.use(RouterPaths.BREWERY,  breweryRouter);

// Location routes
routes.use(RouterPaths.LOCATION,  locationRouter);


export default routes;
