import express from 'express';
import { getBeers, add, retrieve, count } from '../routes/beer/beer';

const beerController = express.Router();

beerController.get('/all', getBeers);

beerController.post('/add', add);

beerController.get(':id', retrieve);

beerController.get('/count', count);

export default beerController;