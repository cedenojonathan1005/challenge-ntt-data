import { Controller, Get, Query } from '@nestjs/common';
import { BalancesService } from '../services/balances.service';
import { RequestBalanceDto } from '../dto/request-balance.dto';
import { dates } from '../../data/dates';
import { ResponseBalanceInterface } from '../../interfaces/response-balance.interface';

@Controller('balances')
export class BalancesController {
  constructor(private readonly balancesService: BalancesService) {}

  @Get('sort')
  sort(@Query() request: RequestBalanceDto): ResponseBalanceInterface[] {
    return this.balancesService.sort(dates, request.sort);
  }

  @Get('total')
  total() {
    return this.balancesService.total(dates);
  }
}
