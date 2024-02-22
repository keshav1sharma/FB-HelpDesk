import React from "react";
import axios from "axios";

export default function ChatData() {
    const getChatData = async () => {
        try {
        const response = await axios.get("https://graph.facebook.com/v19.0/me?fields=conversations%7Bparticipants%2Cmessages%7Bid%2Cmessage%7D%7D&access_token=EAAK7zA1SVtkBO5jzO50E0rYDxXKaZBUIpgEx9bjiclh8IFvakvruIb9Iob3iZAr8UDY4IEoHvQYKTZBJMZBbffQDhDO9KbTXIgpD3vUkO5VrwnjV6PbbO2qTvIaPEOPlol4wXHk0D2VOGzpavnbcR7ovpcLMyn6aipcvnesXPu9HltH2FDpDGwD9AgdNfNoTIc76n8nmYNeSBndoGmhfc4YZD");
        return response.data;
        } catch (error) {
        console.log(error);
        }
    };
    
    return { getChatData };
    }


