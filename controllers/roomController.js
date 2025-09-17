const Room = require('../models/room');
const mongoose = require('mongoose');

const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find().populate("bookedBy");
    res.json(rooms);
  } catch (err) {
    next(err);
  }
};

const createRoom = async (req, res, next) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid room id" });
    }

    const updated = await Room.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

const deleteRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid room id" });
    }

    const deleted = await Room.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json({ message: "Room deleted successfully" });
  } catch (err) {
    next(err);
  }
};

const patchRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid room id" });
    }

    const updated = await Room.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  patchRoom,
};
