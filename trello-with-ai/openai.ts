import OpenAI from "openai";

const config = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default config;
