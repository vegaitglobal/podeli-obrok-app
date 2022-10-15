import { Meal } from "../entity/Meal";
import { MealService } from "../service/MealService";
import { NextFunction, Request, Response } from "express";

export class MealController {
  private mealService: MealService = new MealService();

  async all(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Meal[]> {
    const deviceId = request.query.deviceId?.toString();

    return this.mealService.getAll(deviceId);
  }

  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Meal[]> {
    const { meal } = request.body;

    return this.mealService.getAll(meal);
  }
}
