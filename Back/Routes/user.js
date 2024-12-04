const express = require("express");
const router = express.Router();
const db = require("../db");

// Obtener todos los usuarios
router.get("/", async (req, res) => {
    try {
        const pool = await db;
        const result = await pool.request().query("SELECT * FROM Users");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send("Error obteniendo usuarios: " + err.message);
    }
});

// Crear un usuario
router.post("/", async (req, res) => {
    try {
        const { name, email } = req.body;
        const pool = await db;
        const query = "INSERT INTO Users (Name, Email) VALUES (@name, @email)";
        await pool.request()
            .input("name", sql.VarChar, name)
            .input("email", sql.VarChar, email)
            .query(query);
        res.status(201).send("Usuario creado exitosamente");
    } catch (err) {
        res.status(500).send("Error creando usuario: " + err.message);
    }
});

module.exports = router;
