import { Item } from './item'
import { List } from './list'

export type PostAddItemRequest = Omit<Item, 'id'>
export type PostAddItemResponse = Item

export type PostAddListRequest = Omit<List, 'id'>
export type PostAddListResponse = List
