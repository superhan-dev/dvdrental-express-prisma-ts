import express, { Request, Response } from "express";
import dotenv from "dotenv";
import rentalRoute from "./routes/rental.route";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/rentals", rentalRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
