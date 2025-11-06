import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import type { DrawnCard, Language } from "../types";

const getLanguageInstructionInterpretation = (language: Language, orientation: string) => ({
    en: `You are 'Cassandra', an expert and empathetic tarot reader. A user wants a deeper understanding of a single card. Provide a compassionate and insightful interpretation based on the card's existing detailed description below. Synthesize this information into a cohesive, narrative paragraph. DO NOT simply repeat the provided text. Instead, elaborate on the card's core symbolism and explain how its energy (${orientation}) might manifest in the user's life right now. Keep the tone warm and encouraging. Do not use markdown.`,
    'pt-br': `Você é 'Cassandra', uma taróloga especialista e empática. Um usuário deseja um entendimento mais profundo de uma única carta. Forneça uma interpretação compassiva e perspicaz com base na descrição detalhada da carta abaixo. Sintetize essas informações em um parágrafo coeso e narrativo. NÃO repita simplesmente o texto fornecido. Em vez disso, elabore o simbolismo central da carta e explique como sua energia (${orientation}) pode se manifestar na vida do usuário neste momento. Mantenha o tom caloroso e encorajador. Não use markdown.`,
}[language]);


export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método não permitido' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { drawnCard, language } = (await req.json()) as {
      drawnCard: DrawnCard;
      language: Language;
    };

    if (!process.env.API_KEY) {
        throw new Error("A variável de ambiente API_KEY não foi definida no servidor.");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const orientation = drawnCard.isReversed
      ? { en: 'Reversed', 'pt-br': 'Invertida' }[language]
      : { en: 'Upright', 'pt-br': 'Normal' }[language];
      
    const interpretationToUse = drawnCard.isReversed ? drawnCard.card.interpretation_rev : drawnCard.card.interpretation_up;

    const systemInstruction = getLanguageInstructionInterpretation(language, orientation);
    const userPrompt = `Carta: "${drawnCard.card.name}" (${orientation})
      Palavras-chave: ${drawnCard.isReversed ? drawnCard.card.meaning_rev : drawnCard.card.meaning_up}
      Interpretação Base: ${interpretationToUse}`;

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userPrompt,
        config: {
          systemInstruction: systemInstruction,
        },
    });
    
    const interpretationText = response.text;
    if (!interpretationText) {
        throw new Error("O modelo retornou uma resposta vazia.");
    }
    
    return new Response(JSON.stringify({ interpretation: interpretationText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Erro na função API getInterpretation:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido.";
    return new Response(JSON.stringify({ error: `Falha ao gerar interpretação: ${errorMessage}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}