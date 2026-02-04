import express from "express";
import {
  addVehicle,
  getVehicles,
  deleteVehicle,
} from "../controllers/vehicleController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getVehicles);
router.post("/", upload.single("image"), addVehicle);
router.delete("/:id", deleteVehicle);

export default router;
