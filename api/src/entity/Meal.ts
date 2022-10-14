import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Reservation } from "./Reservation"

@Entity()
export class Meal {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    deviceId: string;

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    city: string

    @Column()
    phone: string

    @Column()
    smsOnly: boolean

    @Column()
    daysToExpiry: number;

    @Column()
    hoursToExpiry: number;

    @Column()
    pickupTime: Date;

    @Column()
    lat: number;

    @Column()
    long: number;

    @OneToMany(() => Reservation, (reservation) => reservation.meal)
    reservations: Reservation[]
}