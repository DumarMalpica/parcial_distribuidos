import express from "express";
import {
  getAll,
  getById,
  create,
  remove,
  getByAnioMin,
  getPromedioPrecio
} from "../models/carroModel.js";

const router = express.Router();

// Obtener todos los carros
router.get("/", (req, res) => {
  getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Buscar por ID
router.get("/:id", (req, res) => {
  getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Carro no encontrado" });
    res.json(row);
  });
});

// Crear nuevo carro
router.post("/", (req, res) => {
  create(req.body, (err, carro) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(carro);
  });
});

// Eliminar carro
router.delete("/:id", (req, res) => {
  remove(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Carro eliminado" });
  });
});

// Buscar por año mínimo (filtro)
router.get("/filtro/anio/:anioMin", (req, res) => {
  getByAnioMin(req.params.anioMin, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Promedio de precios (operación agregada)
router.get("/stats/promedio-precio", (req, res) => {
  getPromedioPrecio((err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
});

export default router;
