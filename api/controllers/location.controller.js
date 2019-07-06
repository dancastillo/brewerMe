import express from 'express';
import { getLocation } from '../routes/beer/location';

const locationController = express.Router();

locationController.get('/', getLocation);

export default locationController;