import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { Meal } from "../entity/Meal"

export class MealService {

    private mealRepository = getRepository(Meal)

    async all() {
        return this.mealRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.mealRepository.findOne(request.params.id)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.mealRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.mealRepository.findOneBy({ id: request.params.id })
        await this.mealRepository.remove(userToRemove)
    }

}