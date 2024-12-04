const sql = require("mssql");
require("dotenv").config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT),
    options: {
        encrypt: true, // Usar true si el servidor utiliza SSL
        trustServerCertificate: true, // Deshabilitar errores con certificados en entornos de desarrollo
    },
};

const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then((pool) => {
        console.log("Conectado a SQL Server");
        return pool;
    })
    .catch((err) => console.error("Error conectando a SQL Server: ", err));

module.exports = poolPromise;
