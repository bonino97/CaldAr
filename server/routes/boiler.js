const express = require('express');
const router = express.Router();
const boilerController = require('../controllers/boiler');

module.exports = () => {
  router.get('/', boilerController.getBoilerById);
  router.get('/all', boilerController.getAllBoilers);
  router.get('/category', boilerController.getBoilerByCategory);

  router.delete('/:id', boilerController.deleteBoiler);
  return router;
};
