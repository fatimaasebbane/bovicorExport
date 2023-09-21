import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';


i18n
    .use(initReactI18next)
    .init({
        lng: 'fr', // Langue par défaut
        fallbackLng: 'fr', // Langue de secours si la traduction n'est pas disponible
        resources: {
            en: {
                translation: translationEN, // Fichier de traduction en anglais
            },
            fr: {
                translation: translationFR, // Fichier de traduction en français
            },
            es: {
                translation: translationES, // Fichier de traduction en ispagne
            },
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;