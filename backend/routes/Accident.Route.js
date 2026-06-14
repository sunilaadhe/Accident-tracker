import { Router } from "express";

import {
  createAccident,
  getAllAccidents,
  deleteAccident,
  updateAccident,
  getSingleAccident,
} from "../controller/Accident.js";

import { isAutheticated } from "../middleware/isAutheticated.js";

const route = Router();


// Create Accident
route.post(
  "/accident/create",
  isAutheticated,
  createAccident
);


// Get All Accidents
route.get(
  "/accident/all",
  getAllAccidents
);

route.get(
  "/accident/:id",
  getSingleAccident
);


// Delete Accident
route.delete(
  "/accident/delete/:id",
  isAutheticated,
  deleteAccident
);


// Update Accident
route.put(
  "/accident/update/:id",
  isAutheticated,
  updateAccident
);

export default route;