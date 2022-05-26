import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locale/en.json';
import translationPL from './locale/pl.json';
import translationDE from './locale/de.json';
import translationRU from './locale/ru.json';
import translationDK from './locale/dk.json';
import translationNL from './locale/nl.json';
import translationFR from './locale/fr.json';
import translationCN from './locale/cn.json';
import translationES from './locale/es.json';
import translationSP from './locale/sp.json';

const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  },
  de: {
    translation: translationDE
  },
  ru: {
    translation: translationRU
  },
  dk: {
    translation: translationDK
  },
  nl: {
    translation: translationNL
  },
  fr: {
    translation: translationFR
  },
  ch: {
    translation: translationCN
  },
  sp: {
    translation: translationES
  },
  sr: {
    translation: translationSP
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;
