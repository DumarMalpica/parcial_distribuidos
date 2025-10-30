import db from "../db.js";

export const getAll = (callback) => {
  db.all("SELECT * FROM carros", [], callback);
};

export const getById = (id, callback) => {
  db.get("SELECT * FROM carros WHERE id = ?", [id], callback);
};

export const create = (carro, callback) => {
  const { marca, modelo, anio, precio } = carro;
  db.run(
    "INSERT INTO carros (marca, modelo, anio, precio) VALUES (?, ?, ?, ?)",
    [marca, modelo, anio, precio],
    function (err) {
      callback(err, { id: this.lastID });
    }
  );
};

export const remove = (id, callback) => {
  db.run("DELETE FROM carros WHERE id = ?", [id], callback);
};

// Buscar por año mínimo
export const getByAnioMin = (anioMin, callback) => {
  db.all("SELECT * FROM carros WHERE anio >= ?", [anioMin], callback);
};

// Calcular promedio de precios
export const getPromedioPrecio = (callback) => {
  db.get("SELECT AVG(precio) as promedio FROM carros", [], callback);
};
