/**
 * Single source for external references shown across the legal pages.
 * Update these once and every page follows.
 */
export const SITE_URL = "https://trackme.top";

export const CONTACT = {
  /** Primary privacy / data-protection contact. */
  privacyEmail: "privacy@trackme.top",
  /** General support inbox. */
  supportEmail: "support@trackme.top",
  /** Legal / terms contact. */
  legalEmail: "legal@trackme.top",
  company: "Track Me",
  website: "https://trackme.top",
};

/** Store listings — linked from the deletion page so users can find the app. */
export const STORES = {
  ios: "https://apps.apple.com/sa/app/nine-the-9/id6748886002",
  android:
    "https://play.google.com/store/apps/details?id=com.foodTruckFinder.UserApp",
};

/** Date each document was last reviewed (ISO). Shown as the "last updated" stamp. */
export const LAST_UPDATED = "2026-07-30";

/**
 * next/image with `unoptimized` does NOT prepend basePath, so every static
 * asset src must go through this helper (NEXT_PUBLIC_ vars are inlined at
 * build time, so the exported HTML gets the right prefix).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${BASE_PATH}${p}`;
