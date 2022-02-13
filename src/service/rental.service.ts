import { prisma } from "../prisma";
import moment from "moment";

export const findAllRental = async () => {
  try {
    const rentals = await prisma.$queryRaw`
    SELECT 
      r.rental_id AS "rentalId",
      s.email AS "staffEmail",
      s.first_name AS "staffName",
      c.email AS "customerEmail",
      c.first_name AS "customerName",
      r.rental_date AS "rentalDate",
      r.return_date AS "returnDate"
    FROM 
      rental r, 
      customer c,
      staff s
    WHERE c.customer_id = r.customer_id
    AND s.staff_id = r.staff_id
    AND c.active = 1
    ORDER BY rental_id DESC
    LIMIT 10;
    `;

    return rentals;
  } catch (error) {
    console.error(error);
  }
};

export const findRentalById = async (rentalId: number) => {
  try {
    const rental = await prisma.$queryRaw`
      SELECT * FROM rental r
      WHERE r.rental_id = ${rentalId};
    `;

    return rental;
  } catch (error) {
    console.error(error);
  }
};

export const updateRental = async (rentalId: number, data: any) => {
  const timestamp = moment(data.returnDate).toDate();
  try {
    const returnedRental = await prisma.rental.update({
      where: { rental_id: rentalId },
      data: { return_date: timestamp },
    });

    return returnedRental;
  } catch (error) {
    console.log(error);
  }
};
