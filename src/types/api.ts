import { Item } from './item'

export type PostAddItemRequest = Omit<Item, 'id'>
export type PostAddItemResponse = Item
