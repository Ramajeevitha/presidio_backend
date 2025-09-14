

const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const { createUser } = require('../controllers/userController');
const router = express.Router();


router.get('/', getAllUsers);
router.post('/', createUser);

module.exports = router;
