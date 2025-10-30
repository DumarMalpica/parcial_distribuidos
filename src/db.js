import sqlite3 from "sqlite3";
sqlite3.verbose();

const db = new sqlite3.Database("./carros.db", (err) => {
  if (err) console.error("Error al conectar la base de datos:", err);
  else console.log("Base de datos SQLite conectada");
});

db.run(`
  CREATE TABLE IF NOT EXISTS carros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    marca TEXT,
    modelo TEXT,
    anio INTEGER,
    precio REAL
  )
`);

export default db;
