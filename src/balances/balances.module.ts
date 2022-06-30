import { Module } from '@nestjs/common';
import { BalancesService } from './services/balances.service';
import { BalancesController } from './controllers/balances.controller';

@Module({
  controllers: [BalancesController],
  providers: [BalancesService],
})
export class BalancesModule {}
