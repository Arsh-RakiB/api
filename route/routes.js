const express = require("express")
const route =express.Router()
const { getuser,postuser } = require("../controller/controllers")

route.get("/",getuser)
route.post("/post",postuser)

module.exports=route;