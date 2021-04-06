const express = require("express");

const UsersController = require("./controllers/Users");
const SessionsController = require("./controllers/Sessions");

const Routes = express.Router();

// user
Routes.get("/user", UsersController.index);
Routes.get("/user/:id", UsersController.get);
Routes.post("/user", UsersController.store);
Routes.delete("/user/:id", UsersController.delete);
Routes.put("/user/:id", UsersController.update);

// session
Routes.post("/session", SessionsController.login);

module.exports = Routes;
