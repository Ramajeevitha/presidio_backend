const User = require('../models/user');
const mongoose = require('mongoose');

 

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        next (err);
    }
};



const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

   
    
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    
    
    const updated = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};


const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

   
    
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    const deleted = await User.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
};
