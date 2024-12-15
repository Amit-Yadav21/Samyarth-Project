import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

// Initialize the Google Gemini AI with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generate = async (description) => {
    try {
        const prompt = `
            Assign a priority (High, Medium, or Low) based on urgency for the task: "${description}".
        `;

        // Send the structured prompt to Gemini API
        const result = await model.generateContent(prompt);
        const responseText = await result.response.text();
        console.log("Gemini AI Response:", responseText);
        return responseText.trim().split('.')[0];

    } catch (error) {
        console.error("Error generating priority:", error.message);
        return "Medium";
    }
};

export { generate };