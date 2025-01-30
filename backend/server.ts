import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const initDB = async () => {
  const db = await open({
    filename: "./barberia.db",
    driver: sqlite3.Database,
  });

  // Crear la tabla si no existe
  await db.exec(`
    CREATE TABLE IF NOT EXISTS precios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      corte TEXT NOT NULL,
      precio TEXT NOT NULL
    )
  `);

  return db;
};

// Obtener precios
app.get("/precios", async (req, res) => {
  const db = await initDB();
  const precios = await db.all("SELECT * FROM precios");
  res.json(precios);
});

// Actualizar un precio
app.put("/precios/:id", async (req, res) => {
  const db = await initDB();
  const { id } = req.params;
  const { precio } = req.body;
  
  await db.run("UPDATE precios SET precio = ? WHERE id = ?", [precio, id]);
  res.json({ success: true });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});