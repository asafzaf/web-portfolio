import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./Layout.module.css";

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a className={styles.skip} href="#content">
      {t.skipToContent}
    </a>
  );
}
