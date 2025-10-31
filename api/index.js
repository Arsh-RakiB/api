require('dotenv/config');
const express = require("express")
const  route  = require("../route/routes");
const DB_connect = require('../db_connection/db');
const app = express()
app.use(express.json())
app.use("/",route)
const port = process.env.PORT;

DB_connect()

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});