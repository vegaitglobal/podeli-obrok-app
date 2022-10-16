import "reflect-metadata";
import { DataSource } from "typeorm";
import { Meal } from "./entity/Meal";
import { Reservation } from "./entity/Reservation";
import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [Meal, Reservation],
  migrations: [],
  subscribers: [],
});
