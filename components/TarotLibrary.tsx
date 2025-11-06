import React from 'react';
import type { TarotCardData } from '../types';
import { CARDS } from '../constants/tarotData';
import { CARD_ART } from '../constants/cardArt';

interface TarotLibraryProps {
  allCards: TarotCardData[];
  onCardClick: (cardIndex: number) => void;
  t: (key: string) => string;
}

const CardPreview: React.FC<{
  card: TarotCardData;
  image: string;
  onClick: () => void;
}> = ({ card, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-28 h-44 bg-purple-900/40 border border-purple-500/30 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-yellow-300/70 hover:shadow-glow-purple transition-all duration-300 overflow-hidden group"
    >
      <img src={image} alt={card.name} className="w-full h-full object-cover" />
       <div className="absolute bottom-0 left-0 right-0 p-1 flex justify-center items-end bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-center text-[10px] font-serif text-gray-200 bg-black/40 rounded px-2 py-0.5 tracking-wider">
            {card.name}
          </p>
        </div>
    </div>
  );
};

const TarotLibrary: React.FC<TarotLibraryProps> = (props) => {
  const {
    allCards,
    onCardClick,
    t,
  } = props;

  const majorArcana = allCards.slice(0, 22);
  const wands = allCards.slice(22, 36);
  const cups = allCards.slice(36, 50);
  const swords = allCards.slice(50, 64);
  const pentacles = allCards.slice(64, 78);

  const getCardImageUrl = (cardIndex: number): string | null => {
    const englishName = CARDS['en'][cardIndex]?.name;
    if (!englishName) {
      return null;
    }
    const imageUrl = CARD_ART[englishName as keyof typeof CARD_ART];
    return imageUrl || null;
  };

  const renderSection = (
    title: string,
    cards: TarotCardData[],
    startIndex: number
  ) => (
    <div className="mb-12">
      <h2 className="text-2xl font-serif text-purple-200 mb-4 tracking-wider border-b-2 border-purple-500/30 pb-2">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, index) => {
          const cardIndex = startIndex + index;
          const image = getCardImageUrl(cardIndex);
          
          if (image) {
            return (
              <CardPreview
                key={card.name}
                card={card}
                image={image}
                onClick={() => onCardClick(cardIndex)}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-purple-200 mb-2 tracking-widest">
          {t('knowTheTarot')}
        </h1>
        <p className="text-md md:text-lg text-purple-300 font-sans">
          Explore a sabedoria de cada carta.
        </p>
      </div>

      {renderSection('Arcanos Maiores', majorArcana, 0)}
      {renderSection('Naipe de Paus', wands, 22)}
      {renderSection('Naipe de Copas', cups, 36)}
      {renderSection('Naipe de Espadas', swords, 50)}
      {renderSection('Naipe de Ouros', pentacles, 64)}
    </div>
  );
};

export default TarotLibrary;