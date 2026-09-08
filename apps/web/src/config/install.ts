/** Staging API. Public install + legal URLs live here (Render env). */
export const apiOrigin = "https://inevnstory-dev-api.onrender.com";

/** Same JSON the invite page and the app use. */
export const installConfigUrl = `${apiOrigin}/api/legal/links`;

export const fallbackIosInstallUrl = "https://testflight.apple.com/join/2BaBF9d8";

/** Empty disables the Android button until the API (or this fallback) has a Play URL. */
export const fallbackAndroidInstallUrl = "";

export const fallbackPrivacyUrl = `${apiOrigin}/privacy`;
export const fallbackTermsUrl = `${apiOrigin}/terms`;
