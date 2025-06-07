const express = require("express")
const router = express.Router()


//api test
const { askGemini } = require("../api")



router.route("/")
    .get(async (req, res) => {
        const reply = await askGemini("say hi")
        res.render('index', { reply })
    })
    .post(async (req, res) => {
        const { prompt } = req.body;
        if (!prompt) return res.status(400).send('Prompt is required');
        const reply = await askGemini(prompt);
        // Render your page and pass reply for display
        res.render('index', { reply });
    });



module.exports = {
    router
}