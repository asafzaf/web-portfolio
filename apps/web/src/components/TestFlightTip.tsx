import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import { InfoIcon } from "./Icons";
import styles from "./TestFlightTip.module.css";

export function TestFlightTip() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const dialogId = useId();
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.tip} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={dialogId}
        onClick={() => setOpen((value) => !value)}
      >
        <InfoIcon />
        {t.testflightTipOpen}
      </button>
      {open ? (
        <div
          className={styles.bubble}
          id={dialogId}
          role="dialog"
          aria-labelledby={titleId}
        >
          <p className={styles.title} id={titleId}>
            {t.testflightTipTitle}
          </p>
          <p className={styles.lead}>{t.testflightTipLead}</p>
          <ol className={styles.steps}>
            {t.testflightTipSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}
