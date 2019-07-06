import express from 'express';
import { getBrewers } from '../routes/beer/brewer';

const brewerController = express.Router();


brewerController.get('/', getBrewers);

export default brewerController;