import { Injectable } from '@angular/core';
import { data } from 'src/assets/data';
import { from, BehaviorSubject, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {
  IFilter,
  IMakeDataLevelDTO,
  INewPersonWithChildren,
  ISort,
} from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  public filter: BehaviorSubject<IFilter> = new BehaviorSubject<IFilter>({
    active: true,
    inactive: true,
  });

  public sort: BehaviorSubject<ISort> = new BehaviorSubject<ISort>({
    value: 'email',
    type: 'asc',
  });

  public users: BehaviorSubject<INewPersonWithChildren[]> = new BehaviorSubject<
    INewPersonWithChildren[]
  >([]);

  constructor() {
    this.makeData();

    merge(this.filter, this.sort).subscribe(() => {
      this.makeData();
    });
  }

  sortRows(users: INewPersonWithChildren[]) {
    const sortValue = this.sort.getValue().value;
    const sortType = this.sort.getValue().type;
    return users.sort((a: INewPersonWithChildren, b: INewPersonWithChildren) => {
        return a[sortValue].localeCompare(b[sortValue]) * (sortType === 'asc' ? 1 : -1);
    });
}

  public makeData() {
    const allUnmodifiedUsers = from(data);
    const makeDataLevel: IMakeDataLevelDTO = (parentId: number = 0) => {
      let usersWithChildrens: INewPersonWithChildren[] = [];
      allUnmodifiedUsers
        .pipe(
          filter((user) => user.parentId === parentId),
          filter(
            (user) =>
              (user.isActive && this.filter.getValue().active) ||
              (!user.isActive && this.filter.getValue().inactive)
          ),
          map((user) => {
            return { ...user, subRows: makeDataLevel(user.id) || undefined };
          })
        )
        .subscribe((user) => usersWithChildrens.push(user));

      usersWithChildrens = this.sortRows(usersWithChildrens);
      return usersWithChildrens;
    };
    this.users.next(makeDataLevel());
  }
}
