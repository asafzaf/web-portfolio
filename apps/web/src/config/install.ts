/** Staging API. Public install + legal URLs live here (Render env). */
export const apiOrigin = "https://inevnstory-dev-api.onrender.com";

/** Same JSON the invite page and the app use. */
export const installConfigUrl = `${apiOrigin}/api/legal/links`;

export const fallbackIosInstallUrl = "https://testflight.apple.com/join/2BaBF9d8";

/** Used when the API is down or returns an empty Android URL. */
export const fallbackAndroidInstallUrl =
  "https://play.google.com/store/apps/details?id=com.invenstory.app.staging";

export const fallbackPrivacyUrl = `${apiOrigin}/privacy`;
export const fallbackTermsUrl = `${apiOrigin}/terms`;
