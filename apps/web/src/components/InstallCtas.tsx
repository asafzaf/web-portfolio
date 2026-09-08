import { useLanguage } from "../i18n/LanguageProvider";
import { AndroidMark, AppleMark } from "./Icons";
import { TestFlightTip } from "./TestFlightTip";
import { useInstallConfig } from "../config/InstallConfigProvider";
import styles from "./InstallCtas.module.css";
import type { ReactNode } from "react";

type Props = {
  align?: "center" | "start";
};

function isAvailable(url: string) {
  return url.trim().length > 0;
}

export function InstallCtas({ align = "center" }: Props) {
  const { t } = useLanguage();
  const { iosInstallUrl, androidInstallUrl } = useInstallConfig();

  return (
    <div className={align === "start" ? styles.start : styles.wrap}>
      <p className={styles.early}>{t.earlyAccess}</p>
      <div className={styles.row}>
        <InstallButton
          href={iosInstallUrl}
          className={styles.primary}
          label={t.installIos}
          hint={t.installIosHint}
          unavailable={t.installUnavailable}
          icon={<AppleMark />}
        />
        <InstallButton
          href={androidInstallUrl}
          className={styles.secondary}
          label={t.installAndroid}
          unavailable={t.installUnavailable}
          comingSoon={t.comingSoon}
          icon={<AndroidMark />}
        />
      </div>
      {isAvailable(iosInstallUrl) ? <TestFlightTip /> : null}
      <p className={styles.note}>{t.installNote}</p>
    </div>
  );
}

function InstallButton({
  href,
  className,
  label,
  hint,
  unavailable,
  comingSoon,
  icon,
}: {
  href: string;
  className: string;
  label: string;
  hint?: string;
  unavailable: string;
  comingSoon?: string;
  icon: ReactNode;
}) {
  const inner = (
    <>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.labelWrap}>
        <span>{label}</span>
        {hint && isAvailable(href) ? <span className={styles.hint}>{hint}</span> : null}
      </span>
      {!isAvailable(href) && comingSoon ? <span className={styles.badge}>{comingSoon}</span> : null}
    </>
  );

  if (!isAvailable(href)) {
    return (
      <button
        type="button"
        className={className}
        disabled
        aria-disabled="true"
        title={unavailable}
        aria-label={`${label}. ${unavailable}`}
      >
        {inner}
      </button>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );
}
