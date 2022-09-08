// We put all API requests here, even though some requests only come from
// specific pages, since the backend doesn't know about pages
import { Item } from './item'
import { List } from './list'

export type PostAddItemRequest = Omit<Item, 'id'>
export type PostAddItemResponse = Item

export type PostAddListRequest = Omit<List, 'id'>
export type PostAddListResponse = List

export interface GetHelpResponse {
    helpMessage: string
}
