import React from 'react';
import type { TarotCardData } from '../types';

interface TarotCardProps {
  card: TarotCardData;
  isReversed: boolean;
  isFlipped: boolean;
  position?: string;
  onClick?: () => void;
  isSelected?: boolean;
  size?: 'small' | 'large';
  imageUrl: string | null;
  backImageUrl: string; 
}

const TarotCard: React.FC<TarotCardProps> = ({ card, isReversed, isFlipped, position, onClick, isSelected = false, size = 'large', imageUrl, backImageUrl }) => {

  const containerSizeClasses = size === 'large' ? 'w-32 md:w-40' : 'w-[72px]';
  const cardSizeClasses = size === 'large' ? 'h-52 md:h-64' : 'h-28';

  const frontImageTransform = isReversed ? 'rotate(180deg)' : '';

  return (
    <div 
      className={`flex flex-col items-center gap-2 ${containerSizeClasses} transition-transform duration-300 ${isSelected && !isFlipped ? 'transform -translate-y-2' : ''}`} 
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative w-full ${cardSizeClasses} transition-transform duration-700 ease-in-out ${onClick ? 'cursor-pointer group' : ''}`}
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        aria-label={onClick ? `Card: ${card.name}, Position: ${position}` : undefined}
        tabIndex={onClick ? 0 : -1}
      >
        {/* Card Back */}
        <div
          aria-hidden="true"
          className={`absolute w-full h-full rounded-lg md:rounded-xl transition-all duration-300 border border-purple-500/30 overflow-hidden ${isSelected && !isFlipped ? 'shadow-glow-purple' : 'group-hover:shadow-glow-purple'}`}
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <img src={backImageUrl} alt="Back of tarot card" className="w-full h-full object-cover" />
        </div>
        
        {/* Card Front */}
        <div
          aria-hidden={!isFlipped}
          className={`absolute w-full h-full rounded-lg md:rounded-xl transition-all duration-300 group-hover:shadow-glow-purple border border-purple-500/30 overflow-hidden bg-[#1e1b4b] flex items-center justify-center`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {imageUrl ? (
            <div className="relative w-full h-full">
              <img 
                src={imageUrl} 
                alt={card.name} 
                className="w-full h-full object-cover"
                style={{ transform: frontImageTransform }} 
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-1 md:p-2 flex justify-center items-end bg-gradient-to-t from-black/70 to-transparent"
                style={{ transform: frontImageTransform }}
              >
                <p className="text-center text-[8px] md:text-xs font-serif text-gray-200 bg-black/40 rounded px-2 py-1 tracking-wider leading-tight">
                  {card.name}
                </p>
              </div>
            </div>
          ) : (
             <div className="text-purple-300 text-xs text-center p-2">Image not available</div>
          )}
        </div>
      </div>
      {position && isFlipped && (
        <p className="text-sm font-semibold font-serif text-purple-300 text-center mt-1 w-full break-words animate-fade-in tracking-wider">{position}</p>
      )}
    </div>
  );
};

export default TarotCard;