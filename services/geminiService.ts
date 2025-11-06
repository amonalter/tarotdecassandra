import type { DrawnCard, ReadingSpread, Language, TarotCardData } from "../types";
import { GoogleGenAI } from "@google/genai";

export const getTarotReading = async (
  drawnCards: DrawnCard[],
  spread: ReadingSpread,
  language: Language
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const cardDescriptions = drawnCards
      .map((item, index) => {
        const orientation = item.isReversed ? "Reversed" : "Upright";
        return `Card ${index + 1} (${spread.positions[index]}): ${
          item.card.name
        } (${orientation}). Meaning: ${
          item.isReversed ? item.card.meaning_rev : item.card.meaning_up
        }. Description: ${item.card.desc}`;
      })
      .join("\n");

    const languageInstruction = {
      en: "You are an expert, empathetic, and insightful tarot reader named 'Cassandra'. Please provide a cohesive and compassionate reading in English. Weave the meanings of the cards together to tell a story that addresses their positions in the spread. Start with a warm greeting. Analyze each card in its position, but focus on the connections and interactions between the cards. Conclude with a thoughtful summary and advice for the user. Structure the response clearly with paragraphs. Do not use markdown formatting like headings or bullet points.",
      'pt-br':
        "Você é uma taróloga especialista, empática e perspicaz chamada 'Cassandra'. Por favor, forneça uma leitura coesa e compassiva em português do Brasil. Entrelace os significados das cartas para contar uma história que aborde suas posições na tiragem. Comece com uma saudação calorosa. Analise cada carta em sua posição, mas foque nas conexões e interações entre as cartas. Conclua com um resumo ponderado e conselhos para o usuário. Estruture a resposta de forma clara com parágrafos. Não use formatação markdown como títulos ou listas.",
    };

    const prompt = `
      ${languageInstruction[language]}
      A user has requested a "${spread.name}" reading. They have drawn the following cards:
      ${cardDescriptions}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating tarot reading:", error);
    return "Error: Unable to generate reading.";
  }
};

// Fix: Added missing getCardInterpretation function to generate dynamic card interpretations.
export const getCardInterpretation = async (
  drawnCard: DrawnCard,
  language: Language
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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

      Card: "${drawnCard.card.name}" (${orientation})
      Keywords: ${drawnCard.isReversed ? drawnCard.card.meaning_rev : drawnCard.card.meaning_up}
      Base Interpretation: ${interpretationToUse}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating card interpretation:", error);
    return "Error: Unable to generate interpretation.";
  }
};