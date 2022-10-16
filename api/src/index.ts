import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import meal from "./routes/meal";
import reservation from "./routes/reservation";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use("/meals", meal);
    app.use("/reservations", reservation);

    app.listen(process.env.APP_PORT);

    console.log(`Express server has started on port ${process.env.APP_PORT}`);
  })
  .catch((error) => console.log(error));
