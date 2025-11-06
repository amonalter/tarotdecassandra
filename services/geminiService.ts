import type { DrawnCard, ReadingSpread, Language } from "../types";

export const getTarotReading = async (
  drawnCards: DrawnCard[],
  spread: ReadingSpread,
  language: Language,
): Promise<string> => {
  try {
    const response = await fetch('/api/getReading', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ drawnCards, spread, language }),
    });

    if (!response.ok) {
      // Tenta extrair a mensagem de erro do corpo JSON, com um fallback para o status text.
      const errorData = await response.json().catch(() => ({}));
      const message = errorData.error?.message || response.statusText;
      throw new Error(message);
    }

    const data = await response.json();
    return data.reading;

  } catch (error) {
    console.error("Error fetching tarot reading:", error);
    if (error instanceof Error) {
        // Verifica se há um erro específico de chave de API para retornar uma mensagem dedicada.
        if (error.message.includes('API Key')) {
           return "Error: Invalid API Key on server.";
        }
    }
    // Retorna uma mensagem de erro genérica para outros problemas.
    return "Error: Unable to generate reading.";
  }
};

export const getCardInterpretation = async (
  drawnCard: DrawnCard,
  language: Language,
): Promise<string> => {
   try {
    const response = await fetch('/api/getInterpretation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ drawnCard, language }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const message = errorData.error?.message || response.statusText;
      throw new Error(message);
    }

    const data = await response.json();
    return data.interpretation;
    
  } catch (error) {
    console.error("Error fetching card interpretation:", error);
     if (error instanceof Error && error.message.includes('API Key')) {
        return "Error: Invalid API Key on server.";
     }
    return "Error: Unable to generate interpretation.";
  }
};