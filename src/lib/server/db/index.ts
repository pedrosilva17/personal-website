import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';
import type { NumberInfo } from './types.ts';

const db = new Database(DB_PATH, {verbose: console.log});

export function getRandomNumber(): NumberInfo {
    const query = 'SELECT * FROM Numbers ORDER BY RANDOM() LIMIT 1;';
    const num = db.prepare(query).get();
    return num as NumberInfo;
}