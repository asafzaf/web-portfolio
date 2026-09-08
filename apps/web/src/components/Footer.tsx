import { useInstallConfig } from "../config/InstallConfigProvider";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./Footer.module.css";

export function Footer() {
  const { lang, t } = useLanguage();
  const { privacyUrl, termsUrl } = useInstallConfig();
  const langQuery = `?lang=${lang}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>{t.brand}</p>
        <nav className={styles.links} aria-label={t.legalNav}>
          <a href={`${privacyUrl}${langQuery}`} target="_blank" rel="noopener noreferrer">
            {t.privacy}
          </a>
          <a href={`${termsUrl}${langQuery}`} target="_blank" rel="noopener noreferrer">
            {t.terms}
          </a>
        </nav>
      </div>
    </footer>
  );
}
