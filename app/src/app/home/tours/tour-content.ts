import { SiteLanguage } from '../../services/language.service';

export type TourKey =
  | 'journee-en-mer'
  | 'coucher-de-soleil'
  | 'anniversaire'
  | 'party'
  | 'sortie-entreprise';

export interface TourPage {
  key: TourKey;
  route: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  image: string;
  duration: string;
  guests: string;
  price: string;
  highlightsTitle: string;
  highlights: string[];
  programTitle: string;
  program: string[];
  includesTitle: string;
  includes: string[];
  idealForTitle: string;
  idealFor: string[];
  cta: string;
  contactNote: string;
  galleryTitle?: string;
  gallery?: string[];
  coreOfferingTitle?: string;
  coreOffering?: string[];
  optionalExtrasTitle?: string;
  optionalExtras?: string[];
  suggestionsTitle?: string;
  guestSuggestions?: string[];
}

/**
 * Editorial content is intentionally absent from this file.
 *
 * Release 104.4: Firebase /bnOutings/{boatId}/{slug}/{language} is the only
 * source for outing titles, descriptions, programmes and labels. This empty
 * object only keeps Angular templates type-safe while Firebase is loading.
 */
export function getTourContent(_language: SiteLanguage, key: TourKey): TourPage {
  return {
    key,
    route: key === 'anniversaire' ? 'party' : key,
    eyebrow: '',
    title: '',
    subtitle: '',
    intro: '',
    image: '',
    duration: '',
    guests: '',
    price: '',
    highlightsTitle: '',
    highlights: [],
    programTitle: '',
    program: [],
    includesTitle: '',
    includes: [],
    idealForTitle: '',
    idealFor: [],
    cta: '',
    contactNote: '',
    galleryTitle: '',
    gallery: [],
    coreOfferingTitle: '',
    coreOffering: [],
    optionalExtrasTitle: '',
    optionalExtras: [],
    suggestionsTitle: '',
    guestSuggestions: [],
  };
}
