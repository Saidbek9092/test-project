import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      title: "Counter List Demo",
      total: "Total Count",
      reset: "Reset All Counts",
      items: {
        react: "React",
        vue: "Vue",
        angular: "Angular",
        svelte: "Svelte"
      }
    }
  },
  ar: {
    translation: {
      title: "قائمة العد",
      total: "المجموع الكلي",
      reset: "إعادة تعيين جميع العدادات",
      items: {
        react: "رياكت",
        vue: "فيو",
        angular: "أنجولار",
        svelte: "سفيلت"
      }
    }
  },
  ru: {
    translation: {
      title: "Список Счетчиков",
      total: "Общее Количество",
      reset: "Сбросить Все Счетчики",
      items: {
        react: "Реакт",
        vue: "Вью",
        angular: "Ангуляр",
        svelte: "Свелт"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 