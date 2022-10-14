import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Reservation } from "./Reservation"

@Entity()
export class Meal {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    deviceId: string;

    @Column({ nullable: false })
    name: string

    @Column()
    description: string

    @Column({ nullable: false })
    address: string

    @Column({ nullable: false })
    phone: string

    @Column({ nullable: false })
    smsOnly: boolean

    @Column({ nullable: false })
    daysToExpiry: number;

    @Column({ nullable: false })
    hoursToExpiry: number;

    @Column({ nullable: false })
    startPickupTime: Date;

    @Column({ nullable: false })
    endPickupTime: Date;

    @Column({ type: 'decimal', nullable: false })
    lat: number;

    @Column({ type: 'decimal', nullable: false })
    long: number;

    @OneToMany(() => Reservation, (reservation) => reservation.meal)
    reservations: Reservation[]
}