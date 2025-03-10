import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
	// load translation using http -> see /public/locales
	.use(Backend)
	// detect user language
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		debug: true,
		parseMissingKeyHandler: (key: string) => {
			return `[${key}]`;

			return key;
		},
	});

export default i18n;
