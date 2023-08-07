import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Meal } from '../entity/Meal';

export class MealService {
  private mealRepository: Repository<Meal> = AppDataSource.getRepository(Meal);

  async getAll(createdByDeviceId?: string): Promise<Meal[]> {
    if (createdByDeviceId) {
      return this.mealRepository.find({
        where: {
          createdByDeviceId: createdByDeviceId
        }
      });
    }
    return this.mealRepository
      .createQueryBuilder()
      .where(
        'id NOT IN (select distinct "mealId" from reservation where cancelled = false and "mealId" is not null) and now() < "Meal"."expiresOn"'
      )
      .getMany()
        .then(meals => {
          for(let meal of meals) {
            [meal.daysToExpiry, meal.hoursToExpiry] = this.calculateDaysAndHoursToExpiry(meal.expiresOn);
          }

          return meals.filter(m => m.hoursToExpiry !== 0 || m.daysToExpiry !== 0);
        });
  }

  async save(meal: Meal): Promise<Meal> {
    meal.expiresOn = this.calculateExpiryTime(meal.daysToExpiry, meal.hoursToExpiry);
    return this.mealRepository.save(meal);
  }

  private calculateExpiryTime(daysToExpiry: number, hoursToExpiry: number): Date {
    const expiresOn: Date = new Date();
    expiresOn.setHours(
      expiresOn.getHours() + daysToExpiry * 24 + hoursToExpiry
    );

    return expiresOn;
  }

  private calculateDaysAndHoursToExpiry(expiryTime: Date): [number, number] {
    const now: Date = new Date();

    const differenceInMilliseconds = expiryTime.getTime() - now.getTime();
    let differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 3600 * 24));
    let differenceInHours = Math.ceil(differenceInMilliseconds / (1000 * 3600) - differenceInDays * 24);

    if (differenceInHours === 24) {
      differenceInDays += 1;
      differenceInHours = 0;
    }

    return [Math.max(0, differenceInDays), Math.max(0, differenceInHours)];
  }
}
