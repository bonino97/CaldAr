const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

module.exports = () => {
  router.get('/', userController.getUserById);
  router.get('/All', userController.getAllUsers);
  router.get('/department', userController.getUserByDepartment);

  router.delete('/:id', userController.deleteUser);
  return router;
};
