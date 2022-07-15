/* eslint-disable no-console */
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

import { DB_FILE } from '../src/server/db'

import { existsSync } from 'fs'
import { mkdir, unlink } from 'fs/promises'
import { dirname } from 'path'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
    if (existsSync(DB_FILE)) {
        console.log('Deleting old database')
        await unlink(DB_FILE)
    }

    console.log(`Opening database at ${DB_FILE}`)
    await mkdir(dirname(DB_FILE))
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
        CREATE TABLE items (
            id INTEGER PRIMARY KEY,
            list_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            completed INTEGER NOT NULL,
            FOREIGN KEY (list_id) REFERENCES lists (id)
        )
    `)
    console.log('done')
})()
