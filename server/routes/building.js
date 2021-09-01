const express = require('express');
const router = express.Router();
const buildingController = require('../controllers/building');

module.exports = () => {
  router.get('/', buildingController.getBuildingById);
  router.get('/all', buildingController.getAllBuildings);
  router.get('/category', buildingController.getBuildingByCategory);

  router.delete('/:id', buildingController.deleteBuilding);
  return router;
};
