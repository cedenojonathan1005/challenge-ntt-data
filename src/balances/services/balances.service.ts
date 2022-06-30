import { Injectable } from '@nestjs/common';
import { ResponseBalanceInterface } from '../../interfaces/response-balance.interface';
import { SortEnum } from '../../constants/sort-enum';

@Injectable()
export class BalancesService {
  sort(dates: ResponseBalanceInterface[], sort: SortEnum) {
    return dates.sort((a, b) => {
      if (sort === SortEnum.ASC) return a.date.getTime() - b.date.getTime();
      return b.date.getTime() - a.date.getTime();
    });
  }

  total(dates: ResponseBalanceInterface[]) {
    return dates.reduce(
      (a, { newBalance, oldBalance }) => ({
        total: (a.total +=
          (newBalance ? newBalance : 0) + (oldBalance ? oldBalance : 0)),
      }),
      { total: 0 },
    );
  }
}
