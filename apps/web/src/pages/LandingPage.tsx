import { InstallCtas } from "../components/InstallCtas";
import { CompareIcon, InventoryIcon, NeedSoonIcon, ShoppingIcon } from "../components/Icons";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./LandingPage.module.css";

const iconSrc = `${import.meta.env.BASE_URL}icon.png`;

export function LandingPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMark}>
          <img src={iconSrc} alt={t.iconAlt} width={112} height={112} className={styles.heroIcon} />
        </div>
        <h1 className={styles.name}>{t.brand}</h1>
        <p className={styles.tagline}>{t.tagline}</p>
        <p className={styles.pitch}>{t.pitch}</p>
        <p className={styles.promise}>{t.promise}</p>
        <InstallCtas />
      </section>

      <section className={styles.section} aria-labelledby="features-title">
        <p className={styles.eyebrow}>{t.featuresEyebrow}</p>
        <h2 id="features-title" className={styles.sectionTitle}>
          {t.featuresTitle}
        </h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <span className={styles.cardMeta}>01</span>
            <span className={styles.cardIcon} data-tone="terracotta">
              <InventoryIcon />
            </span>
            <h3>{t.inventoryTitle}</h3>
            <p>{t.inventoryBody}</p>
          </article>
          <article className={styles.card}>
            <span className={styles.cardMeta}>02</span>
            <span className={styles.cardIcon} data-tone="sage">
              <ShoppingIcon />
            </span>
            <h3>{t.shoppingTitle}</h3>
            <p>{t.shoppingBody}</p>
          </article>
          <article className={styles.card} data-featured="true">
            <span className={styles.cardMeta}>03</span>
            <span className={styles.cardIcon} data-tone="terracotta">
              <CompareIcon />
            </span>
            <h3>{t.pricesTitle}</h3>
            <p>{t.pricesBody}</p>
          </article>
          <article className={styles.card} data-featured="true">
            <span className={styles.cardMeta}>04</span>
            <span className={styles.cardIcon} data-tone="sage">
              <NeedSoonIcon />
            </span>
            <h3>{t.soonTitle}</h3>
            <p>{t.soonBody}</p>
          </article>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="spotlight-title">
        <div className={styles.spotlight}>
          <div>
            <p className={styles.eyebrow}>{t.spotlightEyebrow}</p>
            <h2 id="spotlight-title" className={styles.sectionTitle}>
              {t.spotlightTitle}
            </h2>
          </div>
          <div className={styles.spotlightGrid}>
            <article>
              <h3>{t.spotlightUpdateTitle}</h3>
              <p>{t.spotlightUpdateBody}</p>
            </article>
            <article>
              <h3>{t.spotlightSoonTitle}</h3>
              <p>{t.spotlightSoonBody}</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="loop-title">
        <p className={styles.eyebrow}>{t.loopEyebrow}</p>
        <h2 id="loop-title" className={styles.sectionTitle}>
          {t.loopTitle}
        </h2>
        <ol className={styles.steps}>
          <li>
            <span className={styles.stepNum}>1</span>
            <h3>{t.step1Title}</h3>
            <p>{t.step1Body}</p>
          </li>
          <li>
            <span className={styles.stepNum}>2</span>
            <h3>{t.step2Title}</h3>
            <p>{t.step2Body}</p>
          </li>
          <li>
            <span className={styles.stepNum}>3</span>
            <h3>{t.step3Title}</h3>
            <p>{t.step3Body}</p>
          </li>
          <li>
            <span className={styles.stepNum}>4</span>
            <h3>{t.step4Title}</h3>
            <p>{t.step4Body}</p>
          </li>
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="household-title">
        <div className={styles.household}>
          <div>
            <h2 id="household-title" className={styles.sectionTitle}>
              {t.householdTitle}
            </h2>
            <p className={styles.householdBody}>{t.householdBody}</p>
          </div>
          <ul className={styles.facts}>
            <li>
              <strong>{t.fact1Title}</strong>
              <span>{t.fact1Body}</span>
            </li>
            <li>
              <strong>{t.fact2Title}</strong>
              <span>{t.fact2Body}</span>
            </li>
            <li>
              <strong>{t.fact3Title}</strong>
              <span>{t.fact3Body}</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="get-app" className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.ctaPanel}>
          <img src={iconSrc} alt="" width={64} height={64} className={styles.ctaIcon} />
          <h2 id="cta-title" className={styles.sectionTitle}>
            {t.ctaTitle}
          </h2>
          <p className={styles.ctaBody}>{t.ctaBody}</p>
          <InstallCtas />
        </div>
      </section>
    </>
  );
}
