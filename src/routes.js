const express = require("express");

const UsersController = require("./controllers/Users");

const Routes = express.Router();

// user
Routes.post("/user", UsersController.store);
Routes.delete("/user/:id", UsersController.delete);
Routes.put("/user/:id", UsersController.update);

module.exports = Routes;
