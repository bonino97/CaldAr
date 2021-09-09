const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
module.exports = () => {
  
  router.get('/All', userController.getAllUsers);
  router.get('/department', userController.getUserByDepartment);
  router.get('/:userId', userController.getUserById);     
  router.delete('/:userId', userController.deleteUser);
  return router;
};
