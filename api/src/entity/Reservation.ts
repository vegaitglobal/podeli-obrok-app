import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Meal } from "./Meal";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    deviceId: string;

    @Column({ nullable: false })
    cancelled: boolean;

    @ManyToOne(() => Meal, (meal) => meal.reservations)
    meal: Meal;
}