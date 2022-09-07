import { Item } from './item'
import { List } from './list'
import { User } from './user'

export interface CommonInitialState {
    currentUser: User
}

export interface HomePageInitialState extends CommonInitialState {
    lists: List[]
}

export interface ListPageInitialState extends CommonInitialState {
    list: List
    items: Item[]
}
