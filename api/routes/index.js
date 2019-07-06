import express from 'express';
import brewerController from '../controllers/brewer.controller'
import locationController from '../controllers/location.controller'

const router = express.Router();

router.use('/brewers', brewerController);

router.use('/location', locationController);

router.get('/', (req, res) => {
  res.send('works');
})

export default router;