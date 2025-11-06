import React, { useState, useEffect } from 'react';
import type { DrawnCard, Language } from '../types';
import { getCardInterpretation } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';
import TarotCard from './TarotCard';

type TranslationKey =
  | 'modalKeywords'
  | 'modalInterpretation'
  | 'modalReversed'
  | 'modalLoading'
  | 'modalClose'
  | 'errorInterpretation'
  | 'cardsChosen'
  | 'chooseYourCards';

interface CardDetailModalProps {
  isOpen: boolean;
  cardData: DrawnCard | null;
  onClose: () => void;
  language: Language;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  imageUrl: string | null;
  backImageUrl: string;
}

const CardDetailModal: React.FC<CardDetailModalProps> = ({ isOpen, cardData, onClose, language, t, imageUrl, backImageUrl }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [interpretation, setInterpretation] = useState('');

  useEffect(() => {
    if (cardData) {
      const fetchInterpretation = async () => {
        setIsLoading(true);
        setInterpretation('');
        const result = await getCardInterpretation(cardData, language);
        if (result.startsWith("Error:")) {
          setInterpretation(t('errorInterpretation'));
        } else {
          setInterpretation(result);
        }
        setIsLoading(false);
      };
      fetchInterpretation();
    }
  }, [cardData, language, t]);

  if (!isOpen || !cardData) {
    return null;
  }

  const keywords = cardData.isReversed ? cardData.card.meaning_rev : cardData.card.meaning_up;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0c29] border border-purple-500/70 rounded-2xl shadow-2xl shadow-purple-900/50 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative grid grid-cols-1 md:grid-cols-3 gap-6 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors z-10"
          aria-label={t('modalClose')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Column (Card) */}
        <div className="md:col-span-1 flex flex-col items-center pt-8 md:pt-0">
           <TarotCard 
            card={cardData.card} 
            isReversed={cardData.isReversed} 
            isFlipped={true} 
            size="large"
            imageUrl={imageUrl}
            backImageUrl={backImageUrl}
           />
           <div className="mt-4 text-center">
             <h2 className="text-xl font-serif text-yellow-200 tracking-wider">{cardData.card.name}</h2>
             {cardData.isReversed && <p className="text-yellow-400 text-sm font-sans">{t('modalReversed')}</p>}
           </div>
        </div>

        {/* Right Column (Interpretation) */}
        <div className="md:col-span-2 text-purple-200">
          <div className="mb-4">
            <h3 className="font-bold font-serif text-purple-300 tracking-wide">{t('modalKeywords')}</h3>
            <p className="italic font-sans">{keywords}</p>
          </div>
          <div>
            <h3 className="font-bold font-serif text-purple-300 mb-2 tracking-wide">{t('modalInterpretation')}</h3>
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-48">
                  <LoadingSpinner />
                  <p className="mt-4 font-sans">{t('modalLoading')}</p>
              </div>
            ) : (
              <p className="whitespace-pre-wrap leading-relaxed text-sm font-sans">{interpretation}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailModal;