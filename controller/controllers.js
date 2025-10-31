const User = require("../models/model.js");
const getuser = (req, res) => {
    res.send("user found ")
};
const postuser = async (req, res) => {
    const { name, pass } = req.body;

    // Basic check for missing fields
    if (!name || !pass) {
        return res.status(400).json({ message: "Name and password are required." });
    }

    try {
        // --- Saving data to MongoDB ---

        const newUser = await User.create({ name, pass });

        console.log('New user registered in MongoDB:', newUser.name,newUser.pass);

        // Successful creation response (HTTP 201 Created)
        res.status(201).json({
            message: `User '${name}' created successfully in MongoDB.`,
            userId: newUser._id
        });

    } catch (error) {
        // হ্যান্ডেল ডুপ্লিকেট কী এরর (যখন 'name' ইতিমধ্যে বিদ্যমান)
        if (error.code === 11000) {
            return res.status(409).json({ message: `Username '${name}' already taken.` });
        }

        console.error('Registration failed:', error.message);
        res.status(500).json({ message: 'Server error during user registration.' });
    }
}
module.exports = { getuser, postuser }