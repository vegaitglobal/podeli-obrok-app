import {
  IsString,
  Min,
  Max,
  IsNotEmpty,
  ValidateIf,
  IsInt,
  IsNumber,
  IsBoolean,
} from "class-validator";
export class MealDTO {
  @IsString()
  @IsNotEmpty()
  createdByDeviceId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsBoolean()
  @IsNotEmpty()
  smsOnly: boolean;

  @IsInt()
  daysToExpiry: number;

  @IsInt()
  hoursToExpiry: number;

  @ValidateIf((o) => o.startPickupTime > Date.now)
  startPickupTime: Date;

  @ValidateIf((o) => o.endPickupTime > o.startPickupTime)
  endPickupTime: Date;

  @IsNumber({ maxDecimalPlaces: 10 })
  @Min(-90)
  @Max(90)
  lat: number;

  @IsNumber({ maxDecimalPlaces: 10 })
  @Min(-180)
  @Max(180)
  long: number;
}
