/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Database, open } from 'sqlite'
import sqlite3 from 'sqlite3'

import { List, DetailedList } from 'types'

import { join, resolve } from 'path'

export const DB_FILE = resolve(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    join(process.env.HOME!, '.recoil-prototype', 'database.db'),
)

let db: Database | undefined

export async function openDatabase() {
    if (!db) {
        console.log(`Loading database from "${DB_FILE}"`)
        db = await open({
            filename: DB_FILE,
            driver: sqlite3.Database,
        })
    }
    return db
}

export async function getLists(): Promise<List[]> {
    if (!db) {
        await openDatabase()
    }
    if (!db) {
        throw new Error('Could not open database')
    }
    return await db.all(`SELECT * FROM lists`)
}

export async function getList(id: number): Promise<DetailedList | undefined> {
    if (!db) {
        await openDatabase()
    }
    if (!db) {
        throw new Error('Could not open database')
    }
    const listMetadata = await db.get(`SELECT * FROM lists WHERE id = :id`, {
        ':id': id,
    })
    if (!listMetadata) {
        return
    }

    const items = await db.all(`SELECT * FROM items WHERE list_id = :id`, {
        ':id': id,
    })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return {
        ...listMetadata,
        items,
    }
}
