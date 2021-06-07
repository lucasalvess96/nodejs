const express = require("express")

const routes = express()

const ListUsers = require("./Controllers/listUsers")
const CreateUsers = require("./Controllers/createUsers")

const LiistUsers = new ListUsers()
const CreeateUsers = new CreateUsers()

routes.get("/users", LiistUsers.index)

routes.post("/createUsers", CreeateUsers.create) 

module.exports = routes