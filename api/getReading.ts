import type { DrawnCard, ReadingSpread, Language } from "../types";
import { GoogleGenAI } from "@google/genai";

// Adiciona uma declaração de tipo para o corpo da requisição para maior segurança.
interface RequestBody {
  drawnCards: DrawnCard[];
  spread: ReadingSpread;
  language: Language;
}

export default async function handler(req: Request) {
  // Permite apenas o método POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
    });
  }

  try {
    const { drawnCards, spread, language } = (await req.json()) as RequestBody;

    // Validação básica do corpo da requisição
    if (!drawnCards || !spread || !language) {
      return new Response(JSON.stringify({ error: 'Missing required fields in request body' }), {
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

    return new Response(JSON.stringify({ reading: response.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error in /api/getReading:", error);
    let errorMessage = "Unable to generate reading.";
    // Verifica se o erro é uma instância de Error para acessar a propriedade 'message'
    if (error instanceof Error) {
        if (error.message.includes('API key not valid')) {
            errorMessage = "The API Key configured on the server is not valid. Please contact the site administrator.";
        }
    }
    
    return new Response(JSON.stringify({ error: { message: errorMessage } }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
