import "reflect-metadata"
import { DataSource } from "typeorm"
import { Meal } from "./entity/Meal"
import { Reservation } from "./entity/Reservation"

console.log(process.env.DB_USERNAME);

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
})
