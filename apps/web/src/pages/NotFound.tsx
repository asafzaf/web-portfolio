import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./NotFound.module.css";

export function NotFound() {
  const { t } = useLanguage();

  return (
    <section className={styles.wrap}>
      <h1>{t.notFoundTitle}</h1>
      <p>{t.notFoundBody}</p>
      <Link to="/" className={styles.link}>
        {t.notFoundCta}
      </Link>
    </section>
  );
}
