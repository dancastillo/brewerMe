import express from 'express';
import brewerController from '../controllers/brewer.controller'
import locationController from '../controllers/location.controller'
import beerController from '../controllers/beer.controller'

const router = express.Router();

router.use('/brewers', brewerController);

router.use('/location', locationController);

router.use('/beer', beerController);

export default router;