import { Request, Response } from "express";
import {
  findAllRental,
  findRentalById,
  updateRental,
} from "../service/rental.service";

export async function createRentalHandler(req: Request, res: Response) {
  return res.send();
}

export const getAllRentalHandler = async (req: Request, res: Response) => {
  try {
    const rentals = await findAllRental();

    if (!rentals) {
      return res.sendStatus(404);
    }

    res.send(rentals);
  } catch (error) {
    console.error(error);
    return res.sendStatus(404);
  }
};

export const getRentalHandler = async (req: Request, res: Response) => {
  try {
    const rentalId = Number(req.params.rentalId);
    const rental = await findRentalById(rentalId);

    return res.send(rental);
  } catch (error) {
    console.error(error);
    return res.sendStatus(404);
  }
};

export const updateReturnRental = async (req: Request, res: Response) => {
  console.log(req.params, req.body);

  try {
    const rentalId = Number(req.params.rentalId);
    const rental = await updateRental(rentalId, req.body);

    return res.send(rental);
  } catch (error) {}
};
