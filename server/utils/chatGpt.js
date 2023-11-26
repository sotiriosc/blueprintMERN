// const axios = require('axios');
// require('dotenv').config();

// const chatGpt = async (prompt) => {
//     try {
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//             model:"gpt-4",
//             prompt: prompt,
//             max_tokens: 250 // Adjust as needed
//         }, {
//             headers: {
//                 'Authorization': `Bearer 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`
//             }
//         });

//         return response.data.choices[0].text;
//     } catch (error) {
//         console.error('Error with OpenAI API:', error);
//         throw error;
//     }
// };

// module.exports = chatGpt;


// const axios = require('axios');
// require('dotenv').config();

// const chatGpt = async (prompt) => {
//     try {
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//             model: "gpt-3.5-turbo", // Change to 'gpt-4' if available and correct
            
//             messages: [{
//                 role: "system",
//                 content: "You are a knowledgeable personal trainer."
//             }, {
//                 role: "user",
//                 content: prompt
//             }],
//             max_tokens: 250 // Adjust as needed
//         }, {
//             headers: {
//                 'Authorization': `Bearer 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`
//             }
//         });

//         return response.data.choices[0].message.content; // Adjust based on actual response structure
//     } catch (error) {
//         console.error('Error with OpenAI API:', error);
//         throw error;
//     }
// };

// module.exports = chatGpt;


const axios = require('axios');
require('dotenv').config(); // Make sure this line is at the top of your main file
console.log(process.env.CHAT_GPT_KEY);

const chatGpt = async (prompt) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-4",
            messages: [{
                role: "system",
                content: "You are a knowledgeable personal trainer."
            }, {
                role: "user",
                content: prompt
            }],
            max_tokens: 4097
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.CHAT_GPT_KEY}` // Accessing API key from environment variable
            }
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error with OpenAI API:', error.response ? error.response.data : error);
        console.log('Request Data:', error.config.data); // To inspect the payload sent
        console.log('Request Headers:', error.config.headers); // To inspect the headers
        throw error;
    }
    
};

module.exports = chatGpt;

