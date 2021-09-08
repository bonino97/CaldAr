const express = require('express');
const router = express.Router();
const boilerController = require('../controllers/boiler');

module.exports = () => {
  router.post('/', boilerController.addNewBoiler);
  
  router.get('/id/:boilerId', boilerController.getBoilerById);
  router.get('/all', boilerController.getAllBoilers);
  router.get('/type/:boilerType', boilerController.getBoilerByType);

  router.delete('/:id', boilerController.deleteBoiler);
  return router;
};
