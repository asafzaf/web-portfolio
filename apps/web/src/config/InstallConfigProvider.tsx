import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  fallbackAndroidInstallUrl,
  fallbackIosInstallUrl,
  fallbackPrivacyUrl,
  fallbackTermsUrl,
  installConfigUrl,
} from "./install";

export type InstallConfig = {
  iosInstallUrl: string;
  androidInstallUrl: string;
  privacyUrl: string;
  termsUrl: string;
};

const fallbacks: InstallConfig = {
  iosInstallUrl: fallbackIosInstallUrl,
  androidInstallUrl: fallbackAndroidInstallUrl,
  privacyUrl: fallbackPrivacyUrl,
  termsUrl: fallbackTermsUrl,
};

const InstallConfigContext = createContext<InstallConfig>(fallbacks);

function httpsUrl(value: unknown): string {
  if (typeof value !== "string") return "";
  const url = value.trim();
  return /^https?:\/\//i.test(url) ? url : "";
}

function fromServer(data: Record<string, unknown>): InstallConfig {
  return {
    iosInstallUrl: httpsUrl(data.iosInstallUrl) || fallbacks.iosInstallUrl,
    androidInstallUrl: httpsUrl(data.androidInstallUrl),
    privacyUrl: httpsUrl(data.privacyPolicyUrl) || fallbacks.privacyUrl,
    termsUrl: httpsUrl(data.termsOfUseUrl) || fallbacks.termsUrl,
  };
}

export function InstallConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<InstallConfig>(fallbacks);

  useEffect(() => {
    const controller = new AbortController();

    fetch(installConfigUrl, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("config"))))
      .then((data: unknown) => {
        if (!data || typeof data !== "object") return;
        setConfig(fromServer(data as Record<string, unknown>));
      })
      .catch(() => {
        /* keep fallbacks — marketing site still works if Render is down */
      });

    return () => controller.abort();
  }, []);

  const value = useMemo(() => config, [config]);

  return (
    <InstallConfigContext.Provider value={value}>{children}</InstallConfigContext.Provider>
  );
}

export function useInstallConfig() {
  return useContext(InstallConfigContext);
}
