import express from "express";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Enable ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static HTML file
app.use(express.static(__dirname));
app.use(express.json());

// Setup GenAI
const ai = new GoogleGenAI({ apiKey: "API" });

app.post("/ask", async (req, res) => {
    const prompt = req.body
    let usrIn = prompt.usrIn
    console.log(usrIn)
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: usrIn,
        });
        console.log(response.text)
        res.send(response.text);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});