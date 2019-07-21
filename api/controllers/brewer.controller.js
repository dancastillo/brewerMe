import express from 'express';
import { getAll, retrieve, count, beers, locations } from '../routes/beer/brewer';

const brewerController = express.Router();

brewerController.get('/all', getAll);

brewerController.post('/add', add);

brewerController.get('retrieve:id', retrieve);

brewerController.get('/count', count);

brewerController.get('/beers:id', beers);

brewerController.get('/locations:id', locations);

export default brewerController;