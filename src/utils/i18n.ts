import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const backend = new Backend(null, {
  loadPath: (lngs, namespaces) => {
    const [lng] = lngs;
    const [ns] = namespaces;

    if (ns === "content") {
      return `/locales/${lng}/translation.json`;
    }

    // Konstruiere den Endpunkt basierend auf Sprache und Pfad
    return `http://localhost:3003/${ns}/${lng}`;
  },
});

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(backend)
  .init({
    debug: true,
    fallbackLng: "de",
    ns: ["blog", "content"], // Namen der Übersetzungsbereiche
    defaultNS: "blog", // Der Standard-Übersetzungsbereich
    backend: {
      allowMultiLoading: false,
    },
  });
