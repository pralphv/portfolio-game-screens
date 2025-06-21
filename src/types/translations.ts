export type TranslationKey = string;
export type TranslationValue = string | { [key: string]: TranslationValue };
export type Translations = {
  [language: string]: { [key: string]: TranslationValue };
};
export type SupportedLanguage = "en" | "ja" | "zh";

export interface TranslationContextType {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (key: TranslationKey, fallback?: string) => string;
}
