import { Router } from 'express';
import { RouterPaths } from '../../routes/constants/router-paths';
import { locationController } from './index';

const locationRouter = Router();

locationRouter.use('*', locationController.execute);

// Location routes
locationRouter.get(RouterPaths.BASE,  locationController.get);
locationRouter.get(RouterPaths.BY_ID,  locationController.getById);
locationRouter.get(RouterPaths.NEARBY,  locationController.getNearby);

// Get Location route
locationRouter.get(RouterPaths.GET, locationController.getLatitudeLongitude);

export {
  locationRouter
};
