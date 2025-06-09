import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "API" });

async function publishInput(event) {
    // Display User Input
    event.preventDefault();

    const container = document.getElementById('container');

    const message = document.getElementById('input-bar').value;
    if (!message) return
    let input_value = message.trim();

    const newInput = document.createElement('div');
    newInput.className = "py-2 text-right"

    const header = document.createElement("h1")
    header.className = "italic text-lg"
    header.textContent = "YOU"

    const content = document.createElement("p")
    content.className = "pr-4"
    content.textContent = input_value

    newInput.appendChild(header)
    newInput.appendChild(content)

    container.appendChild(newInput)

    document.getElementById('input-bar').value = ""
    document.getElementById('input-bar').placeholder = ""
    console.log("Input Saved")

    // Send to AI
    try {
        async function getAI() {
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: input_value,
            });
            console.log("input: ", input_value);
            console.log("output: ", response.text);
            return response.text
        }

        let text = await main();

        container.appendChild(newInputAI)
    } catch (err) {
        console.log(err)
        let text = err
    }

    const newInputAI = document.createElement('div');
    newInputAI.className = "py-2 text-left"

    const headerAI = document.createElement("h1")
    headerAI.className = "italic text-lg"
    headerAI.textContent = "AI"

    let contentAI = document.createElement("p")
    contentAI.className = "pr-4"
    contentAI.textContent = text
    newInputAI.appendChild(contentAI)
}