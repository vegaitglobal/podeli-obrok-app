import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Meal } from "../entity/Meal";

export class MealService {
  private mealRepository: Repository<Meal> = AppDataSource.getRepository(Meal);

  async getAll(deviceId?: string): Promise<Meal[]> {
    return await this.mealRepository.find({
      where: {
        deviceId: deviceId,
      },
    });
  }

  async save(meal: Meal): Promise<Meal> {
    return await this.mealRepository.save(meal);
  }
}
