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
  /**
   * Shown in the footer copyright. The controlling legal entity is ITMAAM
   * (the App Store seller of record); Food Truck / Track Me is the brand
   * operated under it. Full names live in COMPANY below.
   */
  company: "Track Me",
  website: "https://trackme.top",
};

/**
 * The legal entity behind the app, named in the "who we are" and governing-law
 * sections of every document. ITMAAM is the parent company; Food Truck is the
 * business operating the Track Me app beneath it.
 */
export const COMPANY = {
  parentEn: "ITMAAM Digital Co. for E-Marketing",
  parentAr: "شركة إتمام الرقمية للتسويق الإلكتروني",
  brandEn: "Food Truck",
  brandAr: "فود تراك",
  appEn: "Track Me",
  appAr: "تراك مي",
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
