import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type {
  TranslationKey,
  TranslationValue,
  SupportedLanguage,
  TranslationContextType,
  Translations,
} from "../../types/translations";
import TranslationContext from "./context";

const translations: Translations = {
  en: {
    me: "Me",
    language: "Language",
    screen: "Screen",
    text: "Text",
    settings: "Settings",
    aboutMe: "About Me",
    experience: "Experience",
    hotTakes: "Hot Takes",
    projects: "Projects",
    theme: "Theme",
    nier: "NieR:Automata",
  },
  ja: {
    me: "僕",
    language: "言語",
    screen: "スクリーン",
    text: "テキスト",
    settings: "設定",
    aboutMe: "プロフィール",
    experience: "経歴",
    hotTakes: "本音",
    projects: "プロジェクト",
    theme: "テーマ",
    nier: "NieR:Automata",
  },
  zh: {
    me: "我",
    language: "語言",
    screen: "畫面",
    text: "文本",
    settings: "設定",
    aboutMe: "關於我",
    experience: "經驗",
    hotTakes: "辣評",
    projects: "項目",
    theme: "主題",
    nier: "尼爾：自動人形",
  },
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    const savedLanguage = localStorage.getItem("language") as SupportedLanguage;
    return savedLanguage || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    // dont care for now
    // document.documentElement.lang = language;
  }, [language]);

  const t = (key: TranslationKey, fallback?: string): string => {
    const keys = key.split(".");
    let value: TranslationValue | undefined = translations[language];

    for (const k of keys) {
      if (typeof value === "object" && value !== null) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }

    if (typeof value === "string") {
      return value;
    }

    return fallback || key;
  };

  const setLanguage = (newLanguage: SupportedLanguage): void => {
    if (translations[newLanguage]) {
      setLanguageState(newLanguage);
    } else {
      console.warn(`Language '${newLanguage}' not supported`);
    }
  };

  const contextValue: TranslationContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};
