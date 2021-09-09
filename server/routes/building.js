const express = require('express');
const router = express.Router();
const buildingController = require('../controllers/building');

module.exports = () => {
  router.get('/all', buildingController.getAllBuildings);
  router.get('/:buildingId', buildingController.getBuildingById);
  router.get('/category/:category', buildingController.getBuildingByCategory);

  router.delete('/:id', buildingController.deleteBuilding);
  return router;
};
