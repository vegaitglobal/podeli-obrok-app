import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  RelationId,
  JoinColumn
} from 'typeorm';
import { Meal } from './Meal';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  reservedByDeviceId: string;

  @Column({ nullable: false })
  cancelled: boolean;

  @ManyToOne((type) => Meal, (meal) => meal.reservations)
  meal: Meal;

  @Column({ nullable: true })
  mealId: number;
}
