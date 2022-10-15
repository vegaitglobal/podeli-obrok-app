import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { Meal } from "./entity/Meal";
import { Reservation } from "./entity/Reservation";
import * as dotenv from "dotenv";
import { MealDTO } from "./dto/MealDTO";
import DTOValidationMiddleware from "./middleware/DTOValidationMiddleware";
import { MealController } from "./controller/MealController";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();

    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });
    //primer middleware wire up-ovanja za tacno jednu rutu, tj. jednu funkciju u kontroleru
    //this.router.post(`${this.path}`, DTOValidationMiddleware(MealDTO),this.MealController.create);
    // setup express app here
    // ...
    // start express server
    app.listen(3000);

    const punjenePaprike = AppDataSource.manager.create(Meal, {
      address: "ulica paprike",
      daysToExpiry: 5,
      description: "punjene paprike punjene paprike punjene paprike",
      deviceId: "31232",
      hoursToExpiry: 5,
      lat: 4343.4343,
      long: -423423.656,
      name: "paprika",
      phone: "44234",
      startPickupTime: new Date(),
      endPickupTime: new Date(),
      smsOnly: true,
    });

    // insert new users for test
    await AppDataSource.manager.save(punjenePaprike);

    await AppDataSource.manager.save(
      AppDataSource.manager.create(Reservation, {
        cancelled: false,
        deviceId: "123213",
        meal: punjenePaprike,
      })
    );

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/meals to see results"
    );
  })
  .catch((error) => console.log(error));
