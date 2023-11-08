const express = require("express");
const route = express.Router();

const {
  getAllUser,
  // getUserById,
  // createUser,
} = require("../controllers/userController");

// Import the controller
route.get("/", getAllUser);
// route.post("/", createUser);
// route.get("/:id", getUserById);

module.exports = route;
