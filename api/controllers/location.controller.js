import express from "express";
import {
  getNearbyLocation,
  addLocation,
  addAddressToALocation,
  getLocationByLocationId
} from "../routes/beer/location";

const locationController = express.Router();

locationController.get("/", getNearbyLocation);

locationController.get("/", getLocationByLocationId);

locationController.post("/", addLocation);

locationController.post("/", addAddressToALocation);

export default locationController;
