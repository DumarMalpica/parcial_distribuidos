import express from "express";
import carrosRouter from "./routes/carros.js";
import "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/carros", carrosRouter);

app.get("/", (req, res) => res.send("API de Carros funcionando"));
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
