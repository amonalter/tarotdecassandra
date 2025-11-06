import React from 'react';
import type { ReadingSpread } from '../types';

interface SpreadPreviewProps {
  spread: ReadingSpread;
}

const CardPlaceholder: React.FC = () => (
  <div className="w-4 h-6 bg-purple-400/20 rounded-sm border border-purple-400/40"></div>
);

const SpreadPreview: React.FC<SpreadPreviewProps> = ({ spread }) => {
  const renderLayout = () => {
    if (spread.cardCount === 1) {
      return <CardPlaceholder />;
    }
    
    if (spread.cardCount === 3) {
      return (
        <div className="flex gap-1.5">
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
        </div>
      );
    }

    if (spread.cardCount === 5) { // For Relationship and Decision
      return (
        <div className="w-16 h-20 grid grid-cols-3 grid-rows-3 gap-0.5 place-items-center">
          <div className="col-start-2 row-start-1"><CardPlaceholder /></div>
          <div className="col-start-1 row-start-2"><CardPlaceholder /></div>
          <div className="col-start-2 row-start-2"><CardPlaceholder /></div>
          <div className="col-start-3 row-start-2"><CardPlaceholder /></div>
          <div className="col-start-2 row-start-3"><CardPlaceholder /></div>
        </div>
      );
    }

    if (spread.cardCount === 7) { // For Horseshoe and Weekly
      return (
        <div className="flex flex-col items-center gap-1.5">
            <div className="flex gap-1.5">
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
            </div>
            <div className="flex gap-1.5">
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
            </div>
        </div>
      );
    }
    
    if (spread.cardCount === 10) { // Celtic Cross
      return (
         <div className="w-[84px] h-[100px] grid grid-cols-[18px_18px_18px_18px] grid-rows-[26px_26px_26px_26px] gap-x-1 justify-center">
            {/* Main Cross */}
            <div className="col-start-2 row-start-1 flex justify-center items-end"><CardPlaceholder /></div> {/* Above */}
            <div className="col-start-1 row-start-2 flex justify-end items-center"><CardPlaceholder /></div> {/* Past */}
            <div className="col-start-2 row-start-2 flex justify-center items-center relative">
                <CardPlaceholder /> {/* Present */}
                <div className="absolute inset-0 transform rotate-90"><CardPlaceholder /></div> {/* Challenge */}
            </div>
            <div className="col-start-3 row-start-2 flex justify-start items-center"><CardPlaceholder /></div> {/* Future */}
            <div className="col-start-2 row-start-3 flex justify-center items-start"><CardPlaceholder /></div> {/* Below */}

            {/* Staff */}
            <div className="col-start-4 row-start-4 flex justify-center items-center"><CardPlaceholder /></div> {/* Pos 7 */}
            <div className="col-start-4 row-start-3 flex justify-center items-center"><CardPlaceholder /></div> {/* Pos 8 */}
            <div className="col-start-4 row-start-2 flex justify-center items-center"><CardPlaceholder /></div> {/* Pos 9 */}
            <div className="col-start-4 row-start-1 flex justify-center items-center"><CardPlaceholder /></div> {/* Pos 10 */}
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="flex justify-center items-center h-28">
      {renderLayout()}
    </div>
  );
};

export default SpreadPreview;
