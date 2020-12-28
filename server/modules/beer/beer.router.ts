import { Router } from 'express';
import { RouterPaths } from '../../routes/constants/router-paths';
import { beerController } from './index';

const beerRouter = Router();

beerRouter.use('*', beerController.execute);

// Beer routes
beerRouter.get(RouterPaths.BASE,  beerController.get);
beerRouter.get(RouterPaths.BY_ID,  beerController.getById);

export {
  beerRouter
};
