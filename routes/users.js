const express = require('express');
const { getAllUsers, createUser, updateUser, deleteUser, patchUser } = require('../controllers/userController');

const router = express.Router();




router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

module.exports = router;
