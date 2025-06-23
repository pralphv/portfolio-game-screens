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
    thisPage: "This page",
    techStack: "Tech Stack",
    amIAWeeb: "Am I a weeb",
    contact: "Contact",
    howItsMade: "How it's made",
    microservices: "Microservices",
    selfTaught: "Self Taught",
    systemDesign: "System Design",
    cleanCode: "Clean Code",
  },
  ja: {
    me: "僕について",
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
    thisPage: "このページについて",
    techStack: "テックスタック",
    amIAWeeb: "アニオタか",
    contact: "連絡",
    howItsMade: "作り方",
    microservices: "マイクロサービス",
    selfTaught: "独学",
    systemDesign: "システム設計",
    cleanCode: "クリーンコード",
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
    thisPage: "本網頁",
    techStack: "技術棧",
    amIAWeeb: "宅男?",
    contact: "聯絡",
    howItsMade: "制作過程",
    microservices: "微服務",
    selfTaught: "自學",
    systemDesign: "系統設計",
    cleanCode: "Clean Code",
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
