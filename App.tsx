import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { DrawnCard, ReadingSpread, Language } from './types';
import { CARDS, SPREADS } from './constants/tarotData';
import { getTarotReading } from './services/geminiService';
import { CARD_ART } from './constants/cardArt';
import { CARD_BACK_DARK } from './constants/cardBacks';
import TarotCard from './components/TarotCard';
import LoadingSpinner from './components/LoadingSpinner';
import CardDetailModal from './components/CardDetailModal';
import SpreadPreview from './components/SpreadPreview';
import TarotLibrary from './components/TarotLibrary';
import AdSenseUnit from './components/AdSenseUnit';

type GameState = 'selection' | 'choosing' | 'drawing' | 'reading' | 'library';

interface DrawnCardDetails {
  cardIndex: number;
  isReversed: boolean;
}

const translations = {
  en: {
    title: "Cassandra's Tarot",
    welcome: "Welcome. I am Cassandra, and I will help you decipher the mysteries of the cards.",
    chooseSpread: "Choose Your Reading Spread",
    concentrate: "Focus on your question, then choose your cards.",
    cards: "cards",
    drawingCards: "Revealing your chosen cards...",
    yourReading: "Your Reading",
    connecting: "Connecting to the cosmos...",
    newReading: "New Reading",
    errorReading: "I'm sorry, but I'm unable to connect with the ethereal plane right now. Please try again later.",
    errorInvalidKey: "The server's API Key is not configured correctly. Please contact the site administrator.",
    errorInterpretation: "I'm sorry, the connection to the card's wisdom is currently obscured. Please try again in a moment.",
    modalKeywords: "Keywords:",
    modalInterpretation: "In-Depth Interpretation:",
    modalReversed: "(Reversed)",
    modalLoading: "Delving into the card's secrets...",
    modalClose: "Close",
    chooseYourCards: "Choose {count} card(s) from the deck below.",
    cardsChosen: "Your cards are chosen. Preparing your reading...",
    knowTheTarot: "Know the Tarot",
    backToSelection: "Back to Spreads",
    exploreTheCards: "Explore the Cards",
    exploreDescription: "Don't have a question? Click here to browse the library and learn the meaning of each card in the deck.",
  },
  'pt-br': {
    title: "Tarot de Cassandra",
    welcome: "Bem-vindo(a). Eu sou Cassandra e vou te ajudar a decifrar os mistérios das cartas.",
    chooseSpread: "Escolha sua Tiragem",
    concentrate: "Concentre-se em sua questão e então escolha suas cartas.",
    cards: "cartas",
    drawingCards: "Revelando suas cartas escolhidas...",
    yourReading: "Sua Leitura",
    connecting: "Conectando-se ao cosmos...",
    newReading: "Nova Leitura",
    errorReading: "Desculpe, não consigo me conectar ao plano etéreo no momento. Por favor, tente novamente mais tarde.",
    errorInvalidKey: "A Chave de API do servidor não está configurada corretamente. Por favor, contate o administrador do site.",
    errorInterpretation: "Desculpe, a conexão com a sabedoria da carta está atualmente obscurecida. Por favor, tente novamente em um momento.",
    modalKeywords: "Palavras-chave:",
    modalInterpretation: "Interpretação Aprofundada:",
    modalReversed: "(Invertida)",
    modalLoading: "Mergulhando nos segredos da carta...",
    modalClose: "Fechar",
    chooseYourCards: "Escolha {count} carta(s) do baralho abaixo.",
    cardsChosen: "Suas cartas foram escolhidas. Preparando sua leitura...",
    knowTheTarot: "Conheça o Tarot",
    backToSelection: "Voltar para Tiragens",
    exploreTheCards: "Explore as Cartas",
    exploreDescription: "Não tem uma pergunta? Clique aqui para navegar pela biblioteca e aprender o significado de cada carta do baralho.",
  },
};

type TranslationKey = keyof typeof translations.en;

const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length, randomIndex;
  const newArray = [...array];
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('selection');
  const [language, setLanguage] = useState<Language>('pt-br');
  const [selectedSpread, setSelectedSpread] = useState<ReadingSpread | null>(null);
  
  const cardData = useMemo(() => CARDS[language], [language]);
  const readingSpreads = useMemo(() => SPREADS[language], [language]);

  const [shuffledDeck, setShuffledDeck] = useState<DrawnCardDetails[]>([]);
  const [chosenDeckIndices, setChosenDeckIndices] = useState<number[]>([]);
  const [drawnCardDetails, setDrawnCardDetails] = useState<DrawnCardDetails[]>([]);
  
  const [flippedCards, setFlippedCards] = useState<boolean[]>([]);
  const [reading, setReading] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCardDetailsForModal, setSelectedCardDetailsForModal] = useState<DrawnCardDetails | null>(null);
  
  const t = useCallback((key: TranslationKey, params?: Record<string, string | number>) => {
    let text = translations[language][key] || translations.en[key];
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(`{${paramKey}}`, String(value));
      });
    }
    return text;
  }, [language]);

  const getFullDrawnCards = useCallback((details: DrawnCardDetails[]): DrawnCard[] => {
      return details.map(detail => ({
          card: cardData[detail.cardIndex],
          isReversed: detail.isReversed,
      }));
  }, [cardData]);


  const handleSelectSpread = (spread: ReadingSpread) => {
    setSelectedSpread(spread);
    const indices = Array.from({ length: cardData.length }, (_, i) => i);
    const newShuffledDeck = shuffle(indices).map(cardIndex => ({
      cardIndex,
      isReversed: Math.random() < 0.5,
    }));
    setShuffledDeck(newShuffledDeck);
    setChosenDeckIndices([]);
    setGameState('choosing');
  };
  
  const handleCardChoice = (deckIndex: number) => {
    if (chosenDeckIndices.includes(deckIndex) || (selectedSpread && chosenDeckIndices.length >= selectedSpread.cardCount)) {
      return;
    }
    setChosenDeckIndices(prev => [...prev, deckIndex]);
  };

  const generateReading = useCallback(async (currentDrawnDetails: DrawnCardDetails[]) => {
    if (!selectedSpread || currentDrawnDetails.length === 0) return;
    setIsLoading(true);
    setReading('');
    const fullCardsForReading = getFullDrawnCards(currentDrawnDetails);
    const result = await getTarotReading(fullCardsForReading, selectedSpread, language);
    if (result.includes("Invalid API Key")) {
      setReading(t('errorInvalidKey'));
    } else if (result.startsWith("Error:")) {
      setReading(t('errorReading'));
    } else {
      setReading(result);
    }
    setIsLoading(false);
  }, [selectedSpread, language, t, getFullDrawnCards]);
  
  useEffect(() => {
    if (gameState === 'choosing' && selectedSpread && chosenDeckIndices.length === selectedSpread.cardCount) {
      const finalDrawnDetails = chosenDeckIndices.map(i => shuffledDeck[i]);
      setDrawnCardDetails(finalDrawnDetails);
      setFlippedCards(new Array(selectedSpread.cardCount).fill(false));
      
      setTimeout(() => {
          setGameState('drawing');
      }, 800);
    }
  }, [chosenDeckIndices, selectedSpread, shuffledDeck, gameState]);

  useEffect(() => {
    if (gameState === 'drawing' && drawnCardDetails.length > 0) {
      const initialReading = async () => {
        setIsLoading(true);
        setReading('');
        const fullCardsForReading = getFullDrawnCards(drawnCardDetails);
        const result = await getTarotReading(fullCardsForReading, selectedSpread, language);
         if (result.includes("Invalid API Key")) {
          setReading(t('errorInvalidKey'));
        } else if (result.startsWith("Error:")) {
          setReading(t('errorReading'));
        } else {
          setReading(result);
        }
        setIsLoading(false);
      }
      initialReading();
      
      const flipTimers = drawnCardDetails.map((_, index) => 
        setTimeout(() => {
          setFlippedCards(prev => {
            const newFlipped = [...prev];
            newFlipped[index] = true;
            return newFlipped;
          });
        }, (index + 1) * 500)
      );
      
      const readingTimer = setTimeout(() => {
        setGameState('reading');
      }, (drawnCardDetails.length + 1) * 500);

      return () => {
        flipTimers.forEach(clearTimeout);
        clearTimeout(readingTimer);
      };
    }
  }, [gameState, drawnCardDetails, getFullDrawnCards, selectedSpread, language, t]);
  
  useEffect(() => {
    const isReadingAvailable = reading && !reading.startsWith(t('errorReading')) && !isLoading;
    if (gameState === 'reading' && isReadingAvailable) {
        const updateReadingForLanguage = async () => {
            if (!selectedSpread || drawnCardDetails.length === 0) return;
            setIsLoading(true);
            const fullCardsForReading = getFullDrawnCards(drawnCardDetails);
            const result = await getTarotReading(fullCardsForReading, selectedSpread, language);
            if (result.includes("Invalid API Key")) {
              setReading(t('errorInvalidKey'));
            } else if (result.startsWith("Error:")) {
              setReading(t('errorReading'));
            } else {
              setReading(result);
            }
            setIsLoading(false);
        }
        updateReadingForLanguage();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const handleReset = () => {
    setGameState('selection');
    setSelectedSpread(null);
    setDrawnCardDetails([]);
    setReading('');
    setFlippedCards([]);
    setSelectedCardDetailsForModal(null);
    setShuffledDeck([]);
    setChosenDeckIndices([]);
  };

  const handleCardClick = (cardDetails: DrawnCardDetails) => {
    if (gameState === 'reading' || gameState === 'library') {
      setSelectedCardDetailsForModal(cardDetails);
    }
  };

  const handleCloseModal = () => {
    setSelectedCardDetailsForModal(null);
  };
  
  const selectedCardForModal = useMemo(() => {
      if (!selectedCardDetailsForModal) return null;
      return {
          card: cardData[selectedCardDetailsForModal.cardIndex],
          isReversed: selectedCardDetailsForModal.isReversed,
      };
  }, [selectedCardDetailsForModal, cardData]);
  
  const getCardImageUrl = useCallback((cardIndex: number): string | null => {
    const englishName = CARDS['en'][cardIndex]?.name;
    if (!englishName) {
      return null;
    }
    const imageUrl = CARD_ART[englishName as keyof typeof CARD_ART];
    return imageUrl || null;
  }, []);


  const renderContent = () => {
    switch (gameState) {
      case 'selection':
        return (
          <div className="text-center animate-fade-in max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-purple-200 mb-2 tracking-widest">{t('title')}</h1>
            <p className="text-md md:text-lg text-purple-300 mb-4 font-sans">{t('welcome')}</p>
            
            <div className="mt-10 mb-6">
              <h2 className="text-2xl font-serif text-yellow-200 tracking-wider">{t('chooseSpread')}</h2>
              <div className="w-24 h-px bg-purple-400/50 mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {readingSpreads.map(spread => (
                <button
                  key={spread.name}
                  onClick={() => handleSelectSpread(spread)}
                  className="p-4 bg-purple-900/40 border border-purple-400/30 rounded-lg hover:bg-purple-800/60 hover:border-purple-400/60 hover:shadow-glow-purple transition-all duration-300 text-yellow-200 flex flex-col items-center justify-between text-center group h-full"
                >
                  <div>
                    <span className="font-serif tracking-wider text-lg">{spread.name}</span>
                    <p className="text-sm text-purple-300 font-sans tracking-normal">({spread.cardCount} {t('cards')})</p>
                  </div>
                  <SpreadPreview spread={spread} />
                  <span className="font-sans text-sm font-normal text-purple-300 normal-case tracking-normal mt-2 group-hover:text-yellow-200 transition-colors duration-300">{spread.description}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="w-48 h-px bg-purple-400/50 mx-auto mb-8"></div>
              <h3 className="text-xl font-serif text-yellow-200 tracking-wider">{t('exploreTheCards')}</h3>
              <p className="text-purple-300 font-sans mt-2 mb-6 max-w-md mx-auto text-sm">
                {t('exploreDescription')}
              </p>
              <button
                onClick={() => setGameState('library')}
                className="px-8 py-3 bg-purple-800/80 border border-purple-400/50 rounded-lg hover:bg-purple-700/90 hover:shadow-glow-purple transition-all duration-300 text-yellow-200 font-semibold font-serif tracking-wider"
              >
                {t('knowTheTarot')}
              </button>
            </div>
          </div>
        );
      
      case 'library':
        return (
          <div>
            <TarotLibrary
              allCards={cardData}
              onCardClick={(cardIndex) => handleCardClick({cardIndex, isReversed: false})}
              t={t}
            />
            <div className="text-center mt-8">
              <button
                onClick={() => setGameState('selection')}
                className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold font-serif tracking-wider rounded-full transition duration-300 transform hover:scale-105 animate-pulse-glow"
              >
                {t('backToSelection')}
              </button>
            </div>
          </div>
        );

      case 'choosing':
        const remaining = selectedSpread!.cardCount - chosenDeckIndices.length;
        return (
          <div className="text-center animate-fade-in w-full">
            <div className="sticky top-4 bg-gradient-to-b from-[#1a1a2e] via-[#1a1a2e] to-transparent py-2 z-10">
              <p className="text-lg font-sans text-purple-300 tracking-wider">{t('concentrate')}</p>
              <h2 className="text-2xl font-serif text-purple-200 mt-1 mb-4 tracking-wider">
                {remaining > 0 ? t('chooseYourCards', {count: remaining}) : t('cardsChosen')}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-start gap-2 md:gap-3 max-w-7xl mx-auto">
              {shuffledDeck.map((item, index) => (
                <TarotCard
                  key={index}
                  card={cardData[item.cardIndex]}
                  isReversed={item.isReversed}
                  isFlipped={false}
                  onClick={() => handleCardChoice(index)}
                  isSelected={chosenDeckIndices.includes(index)}
                  size="small"
                  backImageUrl={CARD_BACK_DARK}
                  imageUrl={null} // Not needed here
                />
              ))}
            </div>
          </div>
        )

      case 'drawing':
        return (
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-serif text-purple-200 mb-8 tracking-wider">{t('drawingCards')}</h2>
            <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8">
              {drawnCardDetails.map((item, index) => (
                  <TarotCard
                    key={index}
                    card={cardData[item.cardIndex]}
                    isReversed={item.isReversed}
                    isFlipped={flippedCards[index]}
                    position={selectedSpread?.positions[index]}
                    size="large"
                    imageUrl={getCardImageUrl(item.cardIndex)}
                    backImageUrl={CARD_BACK_DARK}
                  />
                )
              )}
            </div>
          </div>
        );

      case 'reading':
        return (
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif text-purple-200 mb-8 tracking-wider">{t('yourReading')}</h2>
            <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8 mb-8">
              {drawnCardDetails.map((item, index) => (
                    <TarotCard
                      key={index}
                      card={cardData[item.cardIndex]}
                      isReversed={item.isReversed}
                      isFlipped={true}
                      position={selectedSpread?.positions[index]}
                      onClick={() => handleCardClick(item)}
                      size="large"
                      imageUrl={getCardImageUrl(item.cardIndex)}
                      backImageUrl={CARD_BACK_DARK}
                    />
                 )
              )}
            </div>
            {isLoading ? (
              <div className="my-8">
                <LoadingSpinner />
                <p className="mt-4 text-purple-300 font-sans">{t('connecting')}</p>
              </div>
            ) : (
              <div className="bg-purple-900/30 p-6 md:p-8 rounded-lg border border-purple-500/50 text-left shadow-glow-purple animate-fade-in-up">
                <p className="text-lg text-purple-200 whitespace-pre-wrap leading-relaxed font-sans">{reading}</p>
              </div>
            )}
            <button
              onClick={handleReset}
              className="mt-8 px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold font-serif tracking-wider rounded-full transition duration-300 transform hover:scale-105 animate-pulse-glow"
            >
              {t('newReading')}
            </button>
            <div className="mt-8">
              <AdSenseUnit adSlot="XXXXXXXXXX" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0c29] p-4 md:p-8 flex items-start justify-center">
       <div className="absolute top-4 right-4 flex gap-2 z-20">
          {(['en', 'pt-br'] as Language[]).map(lang => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 text-sm rounded-full transition-colors font-sans ${
                language === lang 
                  ? 'bg-yellow-300/80 text-purple-900 font-bold' 
                  : 'bg-purple-900/50 text-purple-200 hover:bg-purple-800/70'
              }`}
            >
              {lang.split('-')[0].toUpperCase()}
            </button>
          ))}
        </div>
      <main className="w-full relative mt-16 md:mt-0">
        {renderContent()}
      </main>
      <CardDetailModal
        isOpen={!!selectedCardForModal}
        cardData={selectedCardForModal}
        imageUrl={selectedCardDetailsForModal ? getCardImageUrl(selectedCardDetailsForModal.cardIndex) : ''}
        onClose={handleCloseModal}
        language={language}
        t={t}
        backImageUrl={CARD_BACK_DARK}
      />
    </div>
  );
};

export default App;
