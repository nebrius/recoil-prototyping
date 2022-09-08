/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Database, open } from 'sqlite'
import sqlite3 from 'sqlite3'

import { PostAddItemRequest, PostAddListRequest } from 'types/api'
import { Item } from 'types/item'
import { List } from 'types/list'

import { User } from 'types/user'
import { delay } from 'utils'

import { join, resolve } from 'path'

export const DB_FILE = resolve(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    join(process.env.HOME!, '.recoil-prototype', 'database.db'),
)

let db: Database | undefined

async function openDatabase() {
    if (!db) {
        console.log(`Loading database from "${DB_FILE}"`)
        db = await open({
            filename: DB_FILE,
            driver: sqlite3.Database,
        })
    }
    return db
}

async function getDatabase() {
    if (!db) {
        await openDatabase()
    }
    if (!db) {
        throw new Error('Could not open database')
    }
    return db
}

export async function getLists() {
    const db = await getDatabase()
    return await db.all<List[]>(`SELECT * FROM lists`)
}

export async function getList(id: number) {
    const db = await getDatabase()
    const listMetadata = await db.get<List>(
        `SELECT * FROM lists WHERE id = :id`,
        {
            ':id': id,
        },
    )
    return listMetadata
}

export async function getItemsForList(listId: number) {
    const db = await getDatabase()
    const items: Item[] = (
        await db.all<Array<Omit<Item, 'listId'> & { list_id: number }>>(
            `SELECT * FROM items WHERE list_id = :id`,
            {
                ':id': listId,
            },
        )
    ).map(item => ({
        id: item.id,
        listId: item.list_id,
        name: item.name,
        completed: !!item.completed,
    }))
    return items
}

export async function createItem(item: PostAddItemRequest): Promise<Item> {
    const db = await getDatabase()
    const results = await db.run(
        `INSERT INTO items (list_id, name, completed) VALUES (:list_id, :name, :completed)`,
        {
            ':list_id': item.listId,
            ':name': item.name,
            ':completed': item.completed,
        },
    )
    const itemId = results.lastID
    if (!itemId) {
        throw new Error(`Error inserting row`)
    }
    return {
        ...item,
        id: itemId,
    }
}

export async function updateItem(item: Item): Promise<void> {
    const db = await getDatabase()
    await db.run(
        `UPDATE items SET list_id = :list_id, name = :name, completed = :completed WHERE id = :id`,
        {
            ':id': item.id,
            ':list_id': item.listId,
            ':name': item.name,
            ':completed': item.completed,
        },
    )
}

export async function deleteItem(id: number) {
    const db = await getDatabase()
    await db.run(`DELETE FROM items WHERE id = :id`, {
        ':id': id,
    })
}

export async function createList(list: PostAddListRequest): Promise<List> {
    const db = await getDatabase()
    const results = await db.run(`INSERT INTO lists (name) VALUES (:name)`, {
        ':name': list.name,
    })
    const listId = results.lastID
    if (!listId) {
        throw new Error(`Error inserting row`)
    }
    return {
        ...list,
        id: listId,
    }
}

export const TEST_USER: User = {
    name: 'Philip J Fry',
    email: 'fry@aol.com',
}

export async function getCurrentUser(): Promise<User> {
    await delay(1)
    return TEST_USER
}
