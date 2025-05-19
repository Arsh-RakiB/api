import express from "express";
import login from "../controller/controller.js";
const authrouter = express.Router();
authrouter.post("/", login)
export default authrouter