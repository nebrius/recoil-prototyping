/* eslint-disable no-console */
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

import { existsSync } from 'fs'
import { unlink } from 'fs/promises'

import { join } from 'path'

const DB_FILE = join(__dirname, '../database.db')

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
    if (existsSync(DB_FILE)) {
        console.log('Deleting old database')
        await unlink(DB_FILE)
    }

    console.log('Opening database')
    const db = await open({
        filename: DB_FILE,
        driver: sqlite3.Database,
    })

    console.log('Creating tables')
    await db.run(`
        CREATE TABLE lists (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        )
    `)
    await db.run(`
        CREATE TABLE item (
            id INTEGER PRIMARY KEY,
            list_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            FOREIGN KEY (list_id) REFERENCES lists (id)
        )
    `)
    console.log('done')
})()
