import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
    }
).catch((error) => {
    console.log('Error:', error);
    }
);

// Routes
app.use('/auth', authRoute);


app.get('/', (req, res) => {
    res.send('Server is running!');
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    }
);