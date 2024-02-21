import express from "express";


const router = express.Router();
export const fbConnect = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User .findOne({ email });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default router;