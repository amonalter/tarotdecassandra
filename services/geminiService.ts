import type { DrawnCard, ReadingSpread, Language } from "../types";

// Este arquivo agora é um "buscador" do lado do cliente. Ele chama nossas próprias rotas de API,
// que então chamam de forma segura a API Gemini no servidor.

const getErrorMessage = async (response: Response, language: Language): Promise<string> => {
    try {
        const errorData = await response.json();
        // Usa a mensagem de erro da função do servidor, se disponível
        if (errorData && errorData.error) {
            return errorData.error;
        }
    } catch (e) {
        // Fallback se o corpo da resposta não for JSON ou estiver vazio
    }
    // Mensagem de erro genérica de fallback
    return language === 'pt-br'
        ? `Ocorreu um erro no servidor (status: ${response.status}).`
        : `An error occurred on the server (status: ${response.status}).`;
};

export const getTarotReading = async (
  drawnCards: DrawnCard[],
  spread: ReadingSpread,
  language: Language,
): Promise<string> => {
  const response = await fetch('/api/getReading', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ drawnCards, spread, language }),
  });

  if (!response.ok) {
    const errorMessage = await getErrorMessage(response, language);
    console.error("Erro da API ao buscar leitura:", errorMessage);
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data.reading;
};

export const getCardInterpretation = async (
  drawnCard: DrawnCard,
  language: Language,
): Promise<string> => {
  const response = await fetch('/api/getInterpretation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ drawnCard, language }),
  });

  if (!response.ok) {
    const errorMessage = await getErrorMessage(response, language);
    console.error("Erro da API ao buscar interpretação:", errorMessage);
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data.interpretation;
};
