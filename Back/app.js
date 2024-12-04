const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const userRoutes = require("./routes/users");

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api/users", userRoutes);

// Configuración del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
