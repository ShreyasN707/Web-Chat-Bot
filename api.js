const axios = require('axios');
require('dotenv').config();

// 🔑 Replace this with your actual API key
const API_KEY = process.env.API_KEY;

const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

async function askGemini(userPrompt) {
    const requestBody = {
        contents: [
            {
                parts: [{ text: userPrompt }],
            },
        ],
    };

    try {
        const response = await axios.post(url, requestBody);
        const reply = response.data.candidates[0].content.parts[0].text;
        return reply;
    } catch (error) {
        console.error('❌ API Error:', error.response?.data || error.message);
    }
}


module.exports = {
    askGemini
}
