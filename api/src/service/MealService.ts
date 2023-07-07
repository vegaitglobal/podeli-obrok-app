import { DeleteResult, Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Meal } from '../entity/Meal';

export class MealService {
  private mealRepository: Repository<Meal> = AppDataSource.getRepository(Meal);

  async getAll(createdByDeviceId?: string): Promise<Meal[]> {
    return this.mealRepository.find({
      where: {
        createdByDeviceId: createdByDeviceId
      }
    });
  }

  async save(meal: Meal): Promise<Meal> {
    meal.expiresOn = this.calculateExpiresOn(meal);
    return this.mealRepository.save(meal);
  }

  async remove(mealId: number) {
    return this.mealRepository.delete(mealId);
  }

  private calculateExpiresOn(meal: Meal): Date {
    const expiresOn: Date = new Date();
    expiresOn.setHours(
      expiresOn.getHours() + meal.daysToExpiry * 24 + meal.hoursToExpiry
    );

    return expiresOn;
  }
}
