const express = require("express");

const UsersController = require("./controllers/Users");

const Routes = express.Router();

Routes.post("/user", UsersController.store);

module.exports = Routes;
