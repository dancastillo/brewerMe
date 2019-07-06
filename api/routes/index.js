import express from 'express';
import brewerController from '../controllers/brewer.controller'
import locationController from '../controllers/location.controller'

const router = express.Router();

router.use('/brewers', brewerController);

router.use('/location', locationController);

export default router;