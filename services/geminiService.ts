import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import type { DrawnCard, ReadingSpread, Language } from "../types";

// A chave de API é injetada pelo ambiente. Se não estiver definida, o aplicativo não pode funcionar.
if (!process.env.API_KEY) {
  // Exibe um erro claro para o usuário final na tela se a chave não estiver configurada.
  const root = document.getElementById('root');
  if (root) {
      root.innerHTML = `
      <div style="font-family: sans-serif; color: white; text-align: center; padding: 40px;">
        <h1>Erro de Configuração</h1>
        <p>A chave de API para o serviço de IA não foi encontrada.</p>
        <p>Por favor, certifique-se de que a variável de ambiente API_KEY está configurada corretamente.</p>
      </div>
      `;
  }
  throw new Error("A variável de ambiente API_KEY não foi definida.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getLanguageInstructionReading = (language: Language) => ({
  en: "You are an expert, empathetic, and insightful tarot reader named 'Cassandra'. Please provide a cohesive and compassionate reading in English. Weave the meanings of the cards together to tell a story that addresses their positions in the spread. Start with a warm greeting. Analyze each card in its position, but focus on the connections and interactions between the cards. Conclude with a thoughtful summary and advice for the user. Structure the response clearly with paragraphs. Do not use markdown formatting like headings or bullet points.",
  'pt-br': "Você é uma taróloga especialista, empática e perspicaz chamada 'Cassandra'. Por favor, forneça uma leitura coesa e compassiva em português do Brasil. Entrelace os significados das cartas para contar uma história que aborde suas posições na tiragem. Comece com uma saudação calorosa. Analise cada carta em sua posição, mas foque nas conexões e interações entre as cartas. Conclua com um resumo ponderado e conselhos para o usuário. Estruture a resposta de forma clara com parágrafos. Não use formatação markdown como títulos ou listas.",
}[language]);

const getLanguageInstructionInterpretation = (language: Language, orientation: string) => ({
    en: `You are 'Cassandra', an expert and empathetic tarot reader. A user wants a deeper understanding of a single card. Provide a compassionate and insightful interpretation based on the card's existing detailed description below. Synthesize this information into a cohesive, narrative paragraph. DO NOT simply repeat the provided text. Instead, elaborate on the card's core symbolism and explain how its energy (${orientation}) might manifest in the user's life right now. Keep the tone warm and encouraging. Do not use markdown.`,
    'pt-br': `Você é 'Cassandra', uma taróloga especialista e empática. Um usuário deseja um entendimento mais profundo de uma única carta. Forneça uma interpretação compassiva e perspicaz com base na descrição detalhada da carta abaixo. Sintetize essas informações em um parágrafo coeso e narrativo. NÃO repita simplesmente o texto fornecido. Em vez disso, elabore o simbolismo central da carta e explique como sua energia (${orientation}) pode se manifestar na vida do usuário neste momento. Mantenha o tom caloroso e encorajador. Não use markdown.`,
}[language]);


export const getTarotReading = async (
  drawnCards: DrawnCard[],
  spread: ReadingSpread,
  language: Language,
): Promise<string> => {
  try {
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
        throw new Error("O modelo retornou uma resposta vazia, possivelmente devido a filtros de segurança.");
    }
    return readingText;

  } catch (error) {
    console.error("Erro ao buscar leitura de tarot:", error);
    if (error instanceof Error) {
        throw new Error(`Erro na API do Gemini: ${error.message}`);
    }
    throw new Error("Não foi possível gerar a leitura devido a um erro desconhecido.");
  }
};

export const getCardInterpretation = async (
  drawnCard: DrawnCard,
  language: Language,
): Promise<string> => {
   try {
    const orientation = drawnCard.isReversed
      ? { en: 'Reversed', 'pt-br': 'Invertida' }[language]
      : { en: 'Upright', 'pt-br': 'Normal' }[language];
      
    const interpretationToUse = drawnCard.isReversed ? drawnCard.card.interpretation_rev : drawnCard.card.interpretation_up;

    const prompt = `
      ${getLanguageInstructionInterpretation(language, orientation)}

      Carta: "${drawnCard.card.name}" (${orientation})
      Palavras-chave: ${drawnCard.isReversed ? drawnCard.card.meaning_rev : drawnCard.card.meaning_up}
      Interpretação Base: ${interpretationToUse}
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    const interpretationText = response.text;
    if (!interpretationText) {
        throw new Error("O modelo retornou uma resposta vazia, possivelmente devido a filtros de segurança.");
    }
    return interpretationText;
    
  } catch (error) {
    console.error("Erro ao buscar interpretação da carta:", error);
    if (error instanceof Error) {
        throw new Error(`Erro na API do Gemini: ${error.message}`);
    }
    throw new Error("Não foi possível gerar a interpretação devido a um erro desconhecido.");
  }
};
