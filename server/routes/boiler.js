const express = require('express');
const router = express.Router();
const boilerController = require('../controllers/boiler');

module.exports = () => {
  router.post('/', boilerController.addNewBoiler);
  
  router.get('/all', boilerController.getAllBoilers);
  router.get('/type/:boilerType', boilerController.getBoilersByType);
  router.get('/:boilerId', boilerController.getBoilerById);

  router.put('/', boilerController.updateBoiler);

  router.delete('/:boilerId', boilerController.deleteBoiler);
  return router;
};
