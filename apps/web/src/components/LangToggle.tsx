import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./LangToggle.module.css";

export function LangToggle() {
  const { lang, t, setLang } = useLanguage();

  return (
    <div className={styles.lang} role="group" aria-label={t.langGroup}>
      <button
        type="button"
        data-set-lang="he"
        aria-pressed={lang === "he"}
        className={styles.btn}
        onClick={() => setLang("he")}
      >
        {t.langHe}
      </button>
      <button
        type="button"
        data-set-lang="en"
        aria-pressed={lang === "en"}
        className={styles.btn}
        onClick={() => setLang("en")}
      >
        {t.langEn}
      </button>
    </div>
  );
}
