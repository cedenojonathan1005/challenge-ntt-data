import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { SortEnum } from '../../constants/sort-enum';

export class RequestBalanceDto {
  @IsEnum(SortEnum)
  @IsNotEmpty()
  @IsString()
  readonly sort: SortEnum;
}
