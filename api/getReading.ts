import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { DrawnCard, ReadingSpread, Language } from "../types";

const getLanguageInstructionReading = (language: Language) => ({
  en: "You are an expert, empathetic, and insightful tarot reader named 'Cassandra'. Please provide a cohesive and compassionate reading in English. Weave the meanings of the cards together to tell a story that addresses their positions in the spread. Start with a warm greeting. Analyze each card in its position, but focus on the connections and interactions between the cards. Conclude with a thoughtful summary and advice for the user. Structure the response clearly with paragraphs. Do not use markdown formatting like headings or bullet points.",
  'pt-br': "Você é uma taróloga especialista, empática e perspicaz chamada 'Cassandra'. Por favor, forneça uma leitura coesa e compassiva em português do Brasil. Entrelace os significados das cartas para contar uma história que aborde suas posições na tiragem. Comece com uma saudação calorosa. Analise cada carta em sua posição, mas foque nas conexões e interações entre as cartas. Conclua com um resumo ponderado e conselhos para o usuário. Estruture a resposta de forma clara com parágrafos. Não use formatação markdown como títulos ou listas.",
}[language]);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    console.log("START: /api/getReading function triggered.");
    const { drawnCards, spread, language } = req.body as {
      drawnCards: DrawnCard[];
      spread: ReadingSpread;
      language: Language;
    };
    console.log(`Payload received: spread='${spread.name}', language='${language}', cards=${drawnCards.length}`);

    if (!process.env.API_KEY) {
        console.error("CRITICAL ERROR: API_KEY environment variable not found on the server.");
        throw new Error("A chave de API não está configurada no servidor.");
    }
    
    console.log("API_KEY found. Initializing GoogleGenAI...");
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const cardDescriptions = drawnCards
      .map((item, index) => {
        const orientation = item.isReversed ? (language === 'pt-br' ? "Invertida" : "Reversed") : (language === 'pt-br' ? "Normal" : "Upright");
        return `Carta ${index + 1} (${spread.positions[index]}): ${item.card.name} (${orientation}). Significado: ${item.isReversed ? item.card.meaning_rev : item.card.meaning_up}. Descrição: ${item.card.desc}`;
      })
      .join("\n");

    const systemInstruction = getLanguageInstructionReading(language);
    const userPrompt = `Um usuário solicitou uma leitura de "${spread.name}". Ele(a) tirou as seguintes cartas:
      ${cardDescriptions}`;
      
    console.log("Prompt generated. Sending request to Gemini model 'gemini-2.5-flash'...");

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userPrompt,
        config: {
          systemInstruction: systemInstruction,
        },
    });
    console.log("Response received from Gemini.");

    const readingText = response.text;
    if (!readingText) {
        console.warn("Gemini response was empty. This might be due to safety filters. Full response object:", JSON.stringify(response, null, 2));
        throw new Error("O modelo retornou uma resposta vazia. Isso pode acontecer devido a filtros de segurança internos.");
    }
    
    console.log("Successfully generated reading. Sending response to client.");
    return res.status(200).json({ reading: readingText });

  } catch (error) {
    console.error("ERROR CAUGHT in /api/getReading:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido no servidor.";
    return res.status(500).json({ error: `Falha ao gerar leitura: ${errorMessage}` });
  }
}