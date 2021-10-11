import { Component, OnInit } from '@angular/core';
import { SortTypeUnion, SortValueUnion } from 'src/app/types';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(public tableService: TableService) {}

  ngOnInit(): void {}

  onChangeSort(e: Event) {
    this.tableService.sort.next({
      ...this.tableService.sort.getValue(),
      value: (e.target as HTMLInputElement).value as SortValueUnion,
    });
  }

  onChangeSortType(e: Event) {
    this.tableService.sort.next({
      ...this.tableService.sort.getValue(),
      type: (e.target as HTMLInputElement).value as SortTypeUnion,
    });
  }

  onChangeInactive() {
    this.tableService.filter.next({
      ...this.tableService.filter.getValue(),
      inactive: !this.tableService.filter.getValue().inactive,
    });
  }

  onChangeActive() {
    this.tableService.filter.next({
      ...this.tableService.filter.getValue(),
      active: !this.tableService.filter.getValue().active,
    });
  }
}
