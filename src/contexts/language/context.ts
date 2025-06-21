import { createContext } from "react";
import type { TranslationContextType } from "../../types/translations";
const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined,
);
export default TranslationContext;
