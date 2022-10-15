import { Reservation } from "../entity/Reservation";
import { ReservationService } from "../service/ReservationService";
import { NextFunction, Request, Response } from "express";
import { DeleteResult } from "typeorm";

export class ReservationController {
  private reservationService: ReservationService = new ReservationService();

  async all(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Reservation[]> {
    const deviceId = request.query.deviceId?.toString();

    return this.reservationService.getAll(deviceId);
  }

  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Reservation[]> {
    const { Reservation } = request.body;

    return this.reservationService.getAll(Reservation);
  }
  async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<DeleteResult> {
    const { Reservation } = request.body;

    return this.reservationService.delete(Reservation);
  }
}
