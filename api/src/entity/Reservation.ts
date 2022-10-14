import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Meal } from "./Meal";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    deviceId: string;

    @Column()
    cancelled: boolean;

    @ManyToOne(() => Meal, (meal) => meal.reservations)
    meal: Meal;
}