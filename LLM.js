import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCqherhMYqN7uQUNku-WhWmnr5dyv3qmW0" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain Array in details.",
  });
  console.log(response.text);
}

await main();
