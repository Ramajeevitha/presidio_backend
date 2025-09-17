const express = require('express');
const { getAllRooms, createRoom, updateRoom, deleteRoom, patchRoom } = require('../controllers/roomController');

const router = express.Router();

router.get('/', getAllRooms);
router.post('/', createRoom);
router.put('/:id', updateRoom);
router.delete('/:id', deleteRoom);
router.patch('/:id', patchRoom);

module.exports = router;
