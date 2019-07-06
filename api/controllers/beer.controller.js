import express from 'express';
import { getBeers } from '../routes/beer/beer';

const beerController = express.Router();

beerController.get('/', getBeers);

export default beerController;