import Database from "better-sqlite3";
import { sqlFilePath } from "../../../../constants";



export const sqliteDB = new Database(sqlFilePath, {
  verbose: console.log,
});


export function initSqlite(){
    sqliteDB.exec("PRAGMA foreign_keys = ON;")
}
