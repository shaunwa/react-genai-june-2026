const { OpenAI } = require("openai");
const client = new OpenAI();

function generateResponse(prompt) {
    return client.responses.create({
        model: "gpt-5.5",
        input: prompt,
    })
}

module.exports = { generateResponse };