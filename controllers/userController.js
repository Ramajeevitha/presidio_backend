const User = require('../models/User');
const mongoose = require('mongoose');

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Create a new user
const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "Profile saved successfully", user });
  } catch (err) {
    console.error("Error saving profile:", err.message);
    res.status(500).json({ message: "Failed to save profile", error: err.message });
  }
};


// Update a user completely
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid user id' });
    }

    const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User updated successfully', updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating user' });
  }
};

// Patch a user partially
const patchUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid user id' });
    }

    const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User patched successfully', updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error patching user' });
  }
};

// Delete a user
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid user id' });
    }

    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting user' });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  patchUser
};
