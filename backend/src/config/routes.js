const express = require("express");

module.exports = server => {
  // API Routes
  const router = express.Router();
  server.use("/api", router);

  //TODO Routes
  const todoService = require("../src/todo/todoService");
  todoService.register(router, "/todos");
};
