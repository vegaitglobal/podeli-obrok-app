import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Reservation } from "../entity/Reservation";

export class ReservationService {
  private reservationRepository: Repository<Reservation> =
    AppDataSource.getRepository(Reservation);

  async getAll(deviceId?: string): Promise<Reservation[]> {
    return await this.reservationRepository.find({
      where: {
        deviceId: deviceId,
      },
    });
  }

  async save(reservation: Reservation): Promise<Reservation> {
    return await this.reservationRepository.save(reservation);
  }

  async delete(reservation: Reservation): Promise<DeleteResult> {
    return await this.reservationRepository.delete(reservation);
  }
}
