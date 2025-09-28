const express = require('express');
const router = express.Router();

// Import user controller functions
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  patchUser
} = require('../controllers/userController');

// Route to get all users
router.get('/', getAllUsers);

// Route to create a new user
router.post('/', createUser);

// Route to completely update a user by ID
router.put('/:id', updateUser);

// Route to partially update a user by ID
router.patch('/:id', patchUser);

// Route to delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
