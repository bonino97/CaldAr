const express = require('express');
const router = express.Router();
const buildingController = require('../controllers/building');

module.exports = () => {
  router.get('/all', buildingController.getAllBuildings);
  router.get('/category/:category', buildingController.getBuildingsByCategory);
  router.get('/:buildingId', buildingController.getBuildingById);

  router.post('/', buildingController.addNewBuilding);

  router.put('/:buildingId', buildingController.updateBuilding);

  router.delete('/:buildingId', buildingController.deleteBuilding);
  return router;
};
