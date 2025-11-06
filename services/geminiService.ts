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
      const errorData = await response.json();
      // Propaga erros específicos do backend
      if (errorData.error && errorData.error.includes("API Key is not valid")) {
        return "Error: Invalid API Key on server.";
      }
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.reading;

  } catch (error) {
    console.error("Error fetching tarot reading:", error);
    if (error instanceof Error && error.message.includes('Invalid API Key')) {
       return "Error: The server's API Key is not configured correctly. Please contact the site administrator.";
    }
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
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.interpretation;
    
  } catch (error) {
    console.error("Error fetching card interpretation:", error);
    return "Error: Unable to generate interpretation.";
  }
};
