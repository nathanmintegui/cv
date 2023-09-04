import { createContext } from "react";

export enum LANGUAGES {
  PORTUGUES = "Portugues",
  ENGLISH = "English",
}

interface ILanguage {
  language: LANGUAGES;
}

export interface IlanguageContext {
  language: LANGUAGES;
  setLanguage: React.Dispatch<React.SetStateAction<LANGUAGES>>;
}

export const LanguageContext = createContext<IlanguageContext | ILanguage>({
  language: LANGUAGES.ENGLISH,
});
