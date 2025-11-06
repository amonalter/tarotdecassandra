import type { DrawnCard, Language } from "../types";
import { GoogleGenAI } from "@google/genai";

// Adiciona uma declaração de tipo para o corpo da requisição
interface RequestBody {
  drawnCard: DrawnCard;
  language: Language;
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
    });
  }

  try {
    const { drawnCard, language } = (await req.json()) as RequestBody;

    // Validação básica
    if (!drawnCard || !language) {
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

    const orientation = drawnCard.isReversed
      ? { en: 'Reversed', 'pt-br': 'Invertida' }[language]
      : { en: 'Upright', 'pt-br': 'Normal' }[language];

    const languageInstruction = {
      en: `You are 'Cassandra', an expert and empathetic tarot reader. A user wants a deeper understanding of a single card. Provide a compassionate and insightful interpretation based on the card's existing detailed description below. Synthesize this information into a cohesive, narrative paragraph. DO NOT simply repeat the provided text. Instead, elaborate on the card's core symbolism and explain how its energy (${orientation}) might manifest in the user's life right now. Keep the tone warm and encouraging. Do not use markdown.`,
      'pt-br': `Você é 'Cassandra', uma taróloga especialista e empática. Um usuário deseja um entendimento mais profundo de uma única carta. Forneça uma interpretação compassiva e perspicaz com base na descrição detalhada da carta abaixo. Sintetize essas informações em um parágrafo coeso e narrativo. NÃO repita simplesmente o texto fornecido. Em vez disso, elabore o simbolismo central da carta e explique como sua energia (${orientation}) pode se manifestar na vida do usuário neste momento. Mantenha o tom caloroso e encorajador. Não use markdown.`,
    };

    const interpretationToUse = drawnCard.isReversed ? drawnCard.card.interpretation_rev : drawnCard.card.interpretation_up;

    const prompt = `
      ${languageInstruction[language]}

      Carta: "${drawnCard.card.name}" (${orientation})
      Palavras-chave: ${drawnCard.isReversed ? drawnCard.card.meaning_rev : drawnCard.card.meaning_up}
      Interpretação Base: ${interpretationToUse}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return new Response(JSON.stringify({ interpretation: response.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error in /api/getInterpretation:", error);
     let errorMessage = "Unable to generate interpretation.";
    if (error instanceof Error && error.message.includes('API key not valid')) {
        errorMessage = "The API Key configured on the server is not valid. Please contact the site administrator.";
    }
    return new Response(JSON.stringify({ error: { message: errorMessage } }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
