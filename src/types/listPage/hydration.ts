import { CommonInitialState } from 'types/hydration';
import { Item } from 'types/item';
import { List } from 'types/list';

export interface ListPageInitialState extends CommonInitialState {
  list: List;
  items: Item[];
}
