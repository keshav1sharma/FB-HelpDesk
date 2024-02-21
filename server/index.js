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
app.use('/fb', authRoute);

// Webhook
app.post("/webhook", (req, res) => {
    let body = req.body;

    console.log(`\u{1F7EA} Received webhook:`);
    console.dir(body, { depth: null });

    // Send a 200 OK response if this is a page webhook

    if (body.object === "page") {
        body.entry.forEach(function (entry) {

            // Gets the body of the webhook event
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);

            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            console.log('Sender PSID: ' + sender_psid);
    });

// Return a '200 OK' response to all events
res.status(200).send('EVENT_RECEIVED');
    } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
}
});

app.get("/webhook", (req, res) => {

    const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
    // Parse the query params
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    // Check if a token and mode is in the query string of the request
    if (mode && token) {
        // Check the mode and token sent is correct
        if (mode === "subscribe" && token === VERIFY_TOKEN) {
            // Respond with the challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            res.status(200).send(challenge);
        } else {
            // Respond with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
});

app.get('/', (req, res) => {
    res.send('Server is running!');
}
);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);