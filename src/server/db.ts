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
