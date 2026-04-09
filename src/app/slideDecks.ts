import type { ComponentType } from 'react';
import { Slide1 as TechnicalSlide1 } from '@/app/components/Slide1';
import { Slide2 as TechnicalSlide2 } from '@/app/components/Slide2';
import { Slide3 as TechnicalSlide3 } from '@/app/components/Slide3';
import { Slide4 as TechnicalSlide4 } from '@/app/components/Slide4';
import { Slide5 as TechnicalSlide5 } from '@/app/components/Slide5';
import { Slide6 as TechnicalSlide6 } from '@/app/components/Slide6';
import { Slide7 as TechnicalSlide7 } from '@/app/components/Slide7';
import { Slide8 as TechnicalSlide8 } from '@/app/components/Slide8';
import { Slide9 as TechnicalSlide9 } from '@/app/components/Slide9';
import { Slide10 as TechnicalSlide10 } from '@/app/components/Slide10';
import { Slide11 as TechnicalSlide11 } from '@/app/components/Slide11';
import { Slide12 as TechnicalSlide12 } from '@/app/components/Slide12';
import { Slide13 as TechnicalSlide13 } from '@/app/components/Slide13';
import { Slide14 as TechnicalSlide14 } from '@/app/components/Slide14';
import { Slide15 as TechnicalSlide15 } from '@/app/components/Slide15';
import { Slide1 as BusinessSlide1 } from '@/app/components/business/Slide1';
import { Slide2 as BusinessSlide2 } from '@/app/components/business/Slide2';
import { Slide3 as BusinessSlide3 } from '@/app/components/business/Slide3';
import { Slide4 as BusinessSlide4 } from '@/app/components/business/Slide4';
import { Slide6 as BusinessSlide6 } from '@/app/components/business/Slide6';
import { Slide7 as BusinessSlide7 } from '@/app/components/business/Slide7';
import { Slide10 as BusinessSlide10 } from '@/app/components/business/Slide10';
import { Slide11 as BusinessSlide11 } from '@/app/components/business/Slide11';
import { Slide12 as BusinessSlide12 } from '@/app/components/business/Slide12';
import { Slide13 as BusinessSlide13 } from '@/app/components/business/Slide13';
import { Slide14 as BusinessSlide14 } from '@/app/components/business/Slide14';
import { Slide15 as BusinessSlide15 } from '@/app/components/business/Slide15';

type SlideComponent = ComponentType;

export type SlideDeckId = 'technical' | 'business';

export type SlideDeck = {
  id: SlideDeckId;
  label: string;
  slides: SlideComponent[];
};

export const slideDecks: Record<SlideDeckId, SlideDeck> = {
  technical: {
    id: 'technical',
    label: '技术版',
    slides: [
      TechnicalSlide1,
      TechnicalSlide2,
      TechnicalSlide3,
      TechnicalSlide4,
      TechnicalSlide5,
      TechnicalSlide6,
      TechnicalSlide7,
      TechnicalSlide8,
      TechnicalSlide9,
      TechnicalSlide10,
      TechnicalSlide11,
      TechnicalSlide12,
      TechnicalSlide13,
      TechnicalSlide14,
      TechnicalSlide15
    ]
  },
  business: {
    id: 'business',
    label: '业务版',
    slides: [
      BusinessSlide1,
      BusinessSlide2,
      BusinessSlide3,
      BusinessSlide4,
      BusinessSlide6,
      BusinessSlide7,
      BusinessSlide10,
      BusinessSlide11,
      BusinessSlide12,
      BusinessSlide13,
      BusinessSlide14,
      BusinessSlide15
    ]
  }
};

export function resolveSlideDeckId(search: string, envDeck?: string): SlideDeckId {
  const params = new URLSearchParams(search);
  const requestedDeck = params.get('deck') ?? envDeck ?? 'business';
  return requestedDeck === 'business' ? 'business' : 'technical';
}
