import * as express from "express";
import { ReservationDTO } from "../dto/ReservationDto";
import { makeValidateBody } from "express-class-validator";
import {
  all,
  create,
  deleteReservations,
} from "../controller/ReservationController";

const router = express.Router();
router.get("/", all);
router.post("/", makeValidateBody(ReservationDTO), create);
router.delete("/", deleteReservations);

export default router;
