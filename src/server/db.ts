/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Database, open } from 'sqlite'
import sqlite3 from 'sqlite3'

import { List, Item } from 'types'

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
    return await db.all<Item[]>(`SELECT * FROM items WHERE list_id = :id`, {
        ':id': listId,
    })
}

export async function createItem(item: Omit<Item, 'id'>): Promise<Item> {
    const db = await getDatabase()
    const results = await db.run(
        `INSERT INTO items (list_id, name, completed) VALUES (:list_id, :name, :completed)`,
        {
            ':list_id': item.list_id,
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
            ':list_id': item.list_id,
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
