const express = require("express");
const route = express.Router();
const usersRoute = require("./usersRoutes");

// Import the controller

route.get("/", (req, res) => {
  res.json({ message: "Welcome to the sequelize migration" });
});

route.use("/users", usersRoute);

module.exports = route;
