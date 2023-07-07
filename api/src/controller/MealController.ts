import { Meal } from '../entity/Meal';
import { MealService } from '../service/MealService';

export const all = async (req, res, next): Promise<Meal[]> => {
  const mealService: MealService = new MealService();
  const createdByDeviceId = req.query.createdByDeviceId?.toString();
  const meals = await mealService.getAll(createdByDeviceId);
  return res.json(meals);
};

export const create = async (req, res, next): Promise<Meal> => {
  const mealService: MealService = new MealService();
  const meals = await mealService.save(req.body);
  return res.json(meals);
};
