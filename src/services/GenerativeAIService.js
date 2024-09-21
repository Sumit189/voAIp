import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GENERATIVE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const GenerativeAIService = {
    getAnswer: async (transcriptionText) => {
        const prompt = `Answer this question: ${transcriptionText}`;
        const result = await model.generateContent(prompt, { max_length: 100, num_results: 1 });
        return result?.response?.text();
    }
}

export default GenerativeAIService;