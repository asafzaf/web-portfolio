import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageProvider";
import { LangToggle } from "./LangToggle";
import styles from "./Header.module.css";

const iconSrc = `${import.meta.env.BASE_URL}icon.png`;

export function Header() {
  const { t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label={t.brand}>
          <img src={iconSrc} alt="" width={36} height={36} className={styles.icon} />
          <span>{t.brand}</span>
        </Link>
        <div className={styles.actions}>
          <LangToggle />
          <Link to={{ pathname: "/", hash: "get-app" }} className={styles.cta}>
            {t.getApp}
          </Link>
        </div>
      </div>
    </header>
  );
}
