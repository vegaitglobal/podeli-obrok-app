import { Reservation } from "../entity/Reservation";
import { ReservationService } from "../service/ReservationService";
import { NextFunction, Request, Response } from "express";
import { DeleteResult } from "typeorm";
import { ErrorMessage } from "../interface/Error";

export class ReservationController {
  private reservationService: ReservationService = new ReservationService();

  async all(request: Request, _response: Response): Promise<Reservation[]> {
    const deviceId = request.query.deviceId?.toString();

    return this.reservationService.getAll(deviceId);
  }

  async create(
    request: Request,
    response: Response
  ): Promise<Reservation | ErrorMessage> {
    const res = await this.reservationService.save(request.body);
    if (!res) {
      response.status(400);
      return {
        error: "Bad request",
        message: "Can't reservate meal. Meal does not exits",
      };
    }
    response.status(201);
    return res;
  }
  async delete(request: Request, response: Response) {
    const { Reservation } = request.body;
    //response.status(204);
    await this.reservationService.delete(Reservation);
    return response.json({});
  }
}
