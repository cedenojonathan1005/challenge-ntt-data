import { Test, TestingModule } from '@nestjs/testing';
import { BalancesService } from './balances.service';
import { dates } from '../../data/dates';
import { SortEnum } from '../../constants/sort-enum';

describe('BalancesService', () => {
  const sortExpect = [
    {
      date: new Date('2012-01-20'),
      newBalance: 1205,
    },
    {
      date: new Date('2013-05-10'),
      oldBalance: 125.5,
    },
    {
      date: new Date('2018-02-13'),
      oldBalance: 1225,
    },
    {
      date: new Date('2020-04-16'),
      newBalance: null,
    },
  ];
  let service: BalancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalancesService],
    }).compile();

    service = module.get<BalancesService>(BalancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be sort array asc', () => {
    expect(service.sort(dates, SortEnum.ASC)).toEqual(sortExpect);
  });
});
