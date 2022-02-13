import express, { Request, Response } from "express";
import {
  getAllRentalHandler,
  getRentalHandler,
  updateReturnRental,
} from "../controller/rental.controller";
const router = express.Router();

router.get("/healthcheck", (req: Request, res: Response) =>
  res.sendStatus(200)
);

router
  .get("/", getAllRentalHandler)
  .get("/:rentalId", getRentalHandler)
  .patch("/:rentalId", updateReturnRental);

export default router;
