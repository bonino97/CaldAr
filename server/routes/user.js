const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

module.exports = () => {
  router.get('/', userController.getUserById);
  router.get('/all', userController.getAllUsers);
  router.get('/category', userController.getUserByCategory);

  router.delete('/:id', userController.deleteUser);
  return router;
};
