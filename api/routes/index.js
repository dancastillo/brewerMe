import express from 'express';
import brewerController from '../controllers/brewer.controller'

const router = express.Router();

router.use('/brewers', brewerController);

router.get('/', (req, res) => {
  res.send('works');
})

export default router;