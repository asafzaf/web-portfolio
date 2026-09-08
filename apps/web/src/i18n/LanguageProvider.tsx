import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Lang } from "./copy";

const STORAGE_KEY = "invenstory-legal-lang";

type LanguageContextValue = {
  lang: Lang;
  t: (typeof copy)[Lang];
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readQueryLang(): Lang | "" {
  const match = /(?:\?|&)lang=(he|en)\b/i.exec(window.location.search);
  return match ? (match[1].toLowerCase() as Lang) : "";
}

function readStoredLang(): Lang | "" {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "he" || saved === "en" ? saved : "";
  } catch {
    return "";
  }
}

function initialLang(): Lang {
  return readQueryLang() || readStoredLang() || "he";
}

function applyDocumentLang(lang: Lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
}

function persistLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore quota / private mode */
  }
  const params = new URLSearchParams(window.location.search);
  params.set("lang", lang);
  const search = `?${params.toString()}`;
  window.history.replaceState(null, "", `${window.location.pathname}${search}${window.location.hash}`);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    applyDocumentLang(lang);
    persistLang(lang);
    document.title = copy[lang].pageTitle;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      t: copy[lang],
      setLang,
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
