import express from "express";
import authrouter from "./router/router.js";
import DBconnect from "./db/db_connection.js";
const app=express();
// const port = 3000;
app.use(express.json())
app.use('/user/login', authrouter)
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });
DBconnect()