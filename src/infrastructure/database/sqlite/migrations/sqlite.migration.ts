import { initSqlite, sqliteDB } from "../connection/sqlite.connection";
import { CREATE_TABLE_TOPIC } from "../models/user.table";

export function runMigrations() {
  sqliteDB.exec(CREATE_TABLE_TOPIC);
}
