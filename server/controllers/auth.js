import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user and respond
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User does not exist' });
        
        // Check if the password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

        // Create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.header('auth-token', token).json({ token, user });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

