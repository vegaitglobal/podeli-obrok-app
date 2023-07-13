import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';
export class ReservationDTO {
  @IsString()
  @IsNotEmpty()
  reservedByDeviceId: string;

  @IsBoolean()
  cancelled: boolean;

  @IsNumber()
  mealId: number;
}
