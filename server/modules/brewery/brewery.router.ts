import { Router } from 'express';
import { RouterPaths } from '../../routes/constants/router-paths';
import { breweryController } from './index';

const breweryRouter = Router();

breweryRouter.use('*', breweryController.execute);

// Beer routes
breweryRouter.get(RouterPaths.BASE,  breweryController.get);
breweryRouter.get(RouterPaths.BY_ID,  breweryController.getById);

export {
  breweryRouter
};
