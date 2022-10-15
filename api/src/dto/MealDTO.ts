import {
  IsString,
  Length,
  MinLength,
  Min,
  Max,
  IsNotEmpty,
  ValidateIf,
  IsInt,
} from "class-validator";

export class MealDTO {
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  description: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  smsOnly: boolean;

  @IsInt()
  daysToExpiry: number;

  @IsInt()
  hoursToExpiry: number;

  @ValidateIf((o) => o.startPickupTime > Date.now)
  startPickupTime: Date;

  @ValidateIf((o) => o.endPickupTime > o.startPickupTime)
  endPickupTime: Date;

  @IsInt()
  @Min(-90)
  @Max(90)
  lat: number;

  @IsInt()
  @Min(-180)
  @Max(180)
  long: number;
}
