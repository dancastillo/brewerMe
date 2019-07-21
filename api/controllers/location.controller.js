import express from "express";
import {
  getNearby,
  add,
  addAddress,
  getById
} from "../routes/beer/location";

const locationController = express.Router();

locationController.get("/nearby", getNearby);

locationController.get("/:id", getById);

locationController.post("/add", add);

locationController.post("/addAddress", addAddress());

export default locationController;
