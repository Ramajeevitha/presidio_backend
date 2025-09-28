const express = require('express');
const router = express.Router();
const {
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  patchRoom
} = require('../controllers/roomController');

router.get('/', getAllRooms);
router.post('/', createRoom);
router.put('/:id', updateRoom);
router.patch('/:id', patchRoom);
router.delete('/:id', deleteRoom);

module.exports = router;
