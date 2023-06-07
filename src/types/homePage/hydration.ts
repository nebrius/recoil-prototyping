import { CommonInitialState } from 'types/hydration';
import { List } from 'types/list';

export interface HomePageInitialState extends CommonInitialState {
  lists: List[];
}
