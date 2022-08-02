const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

module.exports = () => {
  router.post("/", authController.login);
  return router;
};
