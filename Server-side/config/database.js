import mysql from "mysql2";

const db = mysql.createConnection({ //connection to db
    host: "localhost",
    user: "root",
    password: "",
    database: "bsit2024"
});

export default db;