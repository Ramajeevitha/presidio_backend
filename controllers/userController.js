const User = require('../models/user');

// Get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllUsers
};
