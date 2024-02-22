import React from "react";
import axios from "axios";

export default function ChatData() {
    const getChatData = async () => {
        try {
        const response = await axios.get("https://graph.facebook.com/v19.0/me?fields=conversations%7Bparticipants%2Cmessages%7Bid%2Cmessage%7D%7D&access_token=EAAK7zA1SVtkBOwHZCTWJu4S4LkszfqBwVhNxtpJhLmiJhzSmz4tU2sOZAZCG3xUNXgSUfi7kftBSwQ2wZCt9c0WZAcdoIaDpRpeSA3ubdicUYXy1kGg2Gr8p3BSZAi4IQLdfWpDrglkCoV0gOlLbNadzIGhcInZBHc8sCNIQ2g3rTuN48spLNOV4dcP5WeCaDuJSKwGGDfQd1PGwHctP64xHiEZD");
        //console.log(response.data);
        return response.data;
        } catch (error) {
        console.log(error);
        }
    };
    
    return { getChatData };
    }


