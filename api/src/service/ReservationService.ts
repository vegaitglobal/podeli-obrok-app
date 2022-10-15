import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Meal } from "../entity/Meal";
import { Reservation } from "../entity/Reservation";

export class ReservationService {
  private reservationRepository: Repository<Reservation> =
    AppDataSource.getRepository(Reservation);

  private mealRepository: Repository<Meal> = AppDataSource.getRepository(Meal);

  async getAll(deviceId?: string): Promise<Reservation[]> {
    return this.reservationRepository.find({
      where: {
        deviceId: deviceId,
      },
    });
  }

  async save(reservation): Promise<Reservation | null> {
    const { mealId } = reservation;
    console.log({ mealId });
    const meal = await this.mealRepository.findOne({ where: { id: mealId } });
    console.log({ meal });
    if (!meal) {
      return null;
    }
    return this.reservationRepository.save(reservation);
  }

  async delete(reservationId: number): Promise<void> {
    const reservation = await this.reservationRepository.findOne({
      where: { id: reservationId },
    });
    reservation.cancelled = true;
    await this.reservationRepository.save(reservation);
    return;
  }
}
