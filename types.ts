export interface TarotCardData {
  name: string;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
  interpretation_up: string;
  interpretation_rev: string;
}

export interface DrawnCard {
  card: TarotCardData;
  isReversed: boolean;
}

export interface ReadingSpread {
  name: string;
  cardCount: number;
  positions: string[];
  description: string;
}

export type Language = 'en' | 'pt-br';