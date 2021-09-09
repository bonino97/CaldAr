const express = require('express');
const router = express.Router();
const boilerController = require('../controllers/boiler');

module.exports = () => {
  router.post('/', boilerController.addNewBoiler);
  
  router.get('/all', boilerController.getAllBoilers);
  router.get('/type/:boilerType', boilerController.getBoilerByType);
  router.get('/:boilerId', boilerController.getBoilerById);

  // router.put('/:id', boilerController.modifyBoilerById);

  router.delete('/:id', boilerController.deleteBoiler);
  return router;
};
