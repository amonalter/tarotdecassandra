export const runtime = 'edge';

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import type { DrawnCard, ReadingSpread, Language } from "../types";

const getLanguageInstructionReading = (language: Language) => ({
  en: "You are an expert, empathetic, and insightful tarot reader named 'Cassandra'. Please provide a cohesive and compassionate reading in English. Weave the meanings of the cards together to tell a story that addresses their positions in the spread. Start with a warm greeting. Analyze each card in its position, but focus on the connections and interactions between the cards. Conclude with a thoughtful summary and advice for the user. Structure the response clearly with paragraphs. Do not use markdown formatting like headings or bullet points.",
  'pt-br': "Você é uma taróloga especialista, empática e perspicaz chamada 'Cassandra'. Por favor, forneça uma leitura coesa e compassiva em português do Brasil. Entrelace os significados das cartas para contar uma história que aborde suas posições na tiragem. Comece com uma saudação calorosa. Analise cada carta em sua posição, mas foque nas conexões e interações entre as cartas. Conclua com um resumo ponderado e conselhos para o usuário. Estruture a resposta de forma clara com parágrafos. Não use formatação markdown como títulos ou listas.",
}[language]);

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método não permitido' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { drawnCards, spread, language } = (await req.json()) as {
      drawnCards: DrawnCard[];
      spread: ReadingSpread;
      language: Language;
    };

    if (!process.env.API_KEY) {
        throw new Error("A variável de ambiente API_KEY não foi definida no servidor.");
    }
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const cardDescriptions = drawnCards
      .map((item, index) => {
        const orientation = item.isReversed ? (language === 'pt-br' ? "Invertida" : "Reversed") : (language === 'pt-br' ? "Normal" : "Upright");
        return `Carta ${index + 1} (${spread.positions[index]}): ${item.card.name} (${orientation}). Significado: ${item.isReversed ? item.card.meaning_rev : item.card.meaning_up}. Descrição: ${item.card.desc}`;
      })
      .join("\n");

    const prompt = `
      ${getLanguageInstructionReading(language)}
      Um usuário solicitou uma leitura de "${spread.name}". Ele(a) tirou as seguintes cartas:
      ${cardDescriptions}
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    const readingText = response.text;
    if (!readingText) {
        throw new Error("O modelo retornou uma resposta vazia.");
    }

    return new Response(JSON.stringify({ reading: readingText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Erro na função API getReading:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido.";
    return new Response(JSON.stringify({ error: `Falha ao gerar leitura: ${errorMessage}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}