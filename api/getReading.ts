// Força a execução no ambiente Node.js para garantir compatibilidade com a biblioteca GenAI.
export const runtime = 'nodejs';

import type { DrawnCard, ReadingSpread, Language } from "../types";
import { GoogleGenAI } from "@google/genai";

interface RequestBody {
  drawnCards: DrawnCard[];
  spread: ReadingSpread;
  language: Language;
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: { message: 'Method not allowed' } }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
    });
  }

  try {
    const { drawnCards, spread, language } = (await req.json()) as RequestBody;

    if (!drawnCards || !spread || !language) {
      return new Response(JSON.stringify({ error: { message: 'Missing required fields in request body' } }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY not found in environment variables.");
      return new Response(JSON.stringify({ error: { message: 'API Key not found on server. Contact the site administrator.' } }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const cardDescriptions = drawnCards
      .map((item, index) => {
        const orientation = item.isReversed ? (language === 'pt-br' ? "Invertida" : "Reversed") : (language === 'pt-br' ? "Normal" : "Upright");
        return `Carta ${index + 1} (${spread.positions[index]}): ${
          item.card.name
        } (${orientation}). Significado: ${
          item.isReversed ? item.card.meaning_rev : item.card.meaning_up
        }. Descrição: ${item.card.desc}`;
      })
      .join("\n");

    const languageInstruction = {
      en: "You are an expert, empathetic, and insightful tarot reader named 'Cassandra'. Please provide a cohesive and compassionate reading in English. Weave the meanings of the cards together to tell a story that addresses their positions in the spread. Start with a warm greeting. Analyze each card in its position, but focus on the connections and interactions between the cards. Conclude with a thoughtful summary and advice for the user. Structure the response clearly with paragraphs. Do not use markdown formatting like headings or bullet points.",
      'pt-br':
        "Você é uma taróloga especialista, empática e perspicaz chamada 'Cassandra'. Por favor, forneça uma leitura coesa e compassiva em português do Brasil. Entrelace os significados das cartas para contar uma história que aborde suas posições na tiragem. Comece com uma saudação calorosa. Analise cada carta em sua posição, mas foque nas conexões e interações entre as cartas. Conclua com um resumo ponderado e conselhos para o usuário. Estruture a resposta de forma clara com parágrafos. Não use formatação markdown como títulos ou listas.",
    };

    const prompt = `
      ${languageInstruction[language]}
      Um usuário solicitou uma leitura de "${spread.name}". Ele(a) tirou as seguintes cartas:
      ${cardDescriptions}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    const readingText = response.text;
    if (!readingText) {
        console.warn("Gemini returned an empty response for the reading.");
        throw new Error("The model returned an empty response, possibly due to safety filters.");
    }

    return new Response(JSON.stringify({ reading: readingText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error in /api/getReading:", error);
    let errorMessage = "Unable to generate reading.";
    if (error instanceof Error) {
        if (error.message.includes('API key not valid')) {
            errorMessage = "The API Key configured on the server is not valid. Please contact the site administrator.";
        } else if (error.message.includes('empty response')) {
            errorMessage = "The model could not generate a reading for this combination of cards.";
        }
    }
    
    return new Response(JSON.stringify({ error: { message: errorMessage } }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}