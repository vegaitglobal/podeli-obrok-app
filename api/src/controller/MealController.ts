import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import { MealService } from "../service/MealService"

export class MealController {

    private mealService = new MealService();

    async all(request: Request, response: Response, next: NextFunction) {
        return await this.mealService.all()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })
        await this.userRepository.remove(userToRemove)
    }

}