export interface INewPerson {
  id: number;
  parentId: number;
  isActive: boolean;
  balance: string;
  name: string;
  email: string;
}

export interface INewPersonWithChildren extends INewPerson {
  subRows: any;
}

export type IMakeDataLevelDTO = (depth?: number) => INewPersonWithChildren[];

export interface IFilter {
  active: boolean;
  inactive: boolean;
}

export type SortValueUnion = "email" | "balance";
export type SortTypeUnion = "asc" | "desc";

export interface ISort {
  value: SortValueUnion;
  type: SortTypeUnion;
}
