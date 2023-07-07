import { DeleteResult, Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Meal } from '../entity/Meal';
import { Reservation } from '../entity/Reservation';

export class ReservationService {
  private reservationRepository: Repository<Reservation> =
    AppDataSource.getRepository(Reservation);

  private mealRepository: Repository<Meal> = AppDataSource.getRepository(Meal);

  async getAll(reservedByDeviceId?: string): Promise<Reservation[]> {
    return this.reservationRepository.find({
      where: {
        reservedByDeviceId: reservedByDeviceId
      },
      relations: ['meal']
    });
  }

  async save(reservation): Promise<Reservation | null> {
    const { mealId } = reservation;
    const meal = await this.mealRepository.findOne({ where: { id: mealId } });
    if (!meal) {
      return null;
    }
    return this.reservationRepository.save(reservation);
  }

  async delete(reservationId: number): Promise<boolean> {
    const reservation = await this.reservationRepository.findOne({
      where: { id: reservationId }
    });
    if (!reservation) {
      return false;
    }
    reservation.cancelled = true;
    await this.reservationRepository.save(reservation);
    return true;
  }
}
