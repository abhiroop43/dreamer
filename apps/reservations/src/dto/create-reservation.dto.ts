import { IsISO8601, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsISO8601()
  startDate: Date;

  @IsISO8601()
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  placeId: string;

  @IsString()
  @IsNotEmpty()
  invoiceId: string;
}
