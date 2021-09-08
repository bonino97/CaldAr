const express = require('express');
const router = express.Router();
const boilerController = require('../controllers/boiler');

module.exports = () => {
  router.get('/:boilerId', boilerController.getBoilerById);
  router.get('/', boilerController.getAllBoilers);
  router.get('/type/:boilerType', boilerController.getBoilerByType);

  router.delete('/:id', boilerController.deleteBoiler);
  return router;
};
