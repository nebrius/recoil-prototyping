import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { join } from 'path'

export async function openDatabase() {
    const db = await open({
        filename: join(__dirname, '../../database.db'),
        driver: sqlite3.Database
    })
    return db
}
