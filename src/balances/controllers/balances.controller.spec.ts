import { Test, TestingModule } from '@nestjs/testing';
import { BalancesController } from './balances.controller';
import { BalancesService } from '../services/balances.service';
import { SortEnum } from '../../constants/sort-enum';

describe('BalancesController', () => {
  const sortExpect = [
    {
      date: new Date('2020-04-16'),
      newBalance: null,
    },
    {
      date: new Date('2018-02-13'),
      oldBalance: 1225,
    },
    {
      date: new Date('2013-05-10'),
      oldBalance: 125.5,
    },
    {
      date: new Date('2012-01-20'),
      newBalance: 1205,
    },
  ];
  const totalExpect = {
    total: 2555.5,
  };
  let controller: BalancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalancesController],
      providers: [BalancesService],
    }).compile();

    controller = module.get<BalancesController>(BalancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be sort array', () => {
    expect(controller.sort({ sort: SortEnum.DESC })).toEqual(sortExpect);
  });

  it('should be total balance', () => {
    expect(controller.total()).toEqual(totalExpect);
  });
});
