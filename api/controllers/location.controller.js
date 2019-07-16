import express from 'express';
import { getLocation, addLocation } from '../routes/beer/location';

const locationController = express.Router();

locationController.get('/', getLocation);

locationController.post('/', addLocation);

export default locationController;