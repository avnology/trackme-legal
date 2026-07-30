/**
 * Track Me legal — UI chrome copy in both languages.
 * Arabic is the default (matches the app: easy_localization, RTL-aware).
 * Long-form document bodies live in lib/legal.ts, not here.
 */

export type Lang = "ar" | "en";

const ar = {
  _title: "تراك مي — المركز القانوني",
  _desc:
    "سياسة الخصوصية، شروط الاستخدام، وحذف الحساب والبيانات لتطبيق تراك مي.",
  skip: "تخطَّ إلى المحتوى",

  "nav.home": "المركز القانوني",
  "nav.privacy": "سياسة الخصوصية",
  "nav.terms": "شروط الاستخدام",
  "nav.deletion": "حذف الحساب",
  "nav.app": "التطبيق",
  "nav.menu": "القائمة",

  "home.eyebrow": "المركز القانوني",
  "home.title": "الشفافية أساس الثقة",
  "home.sub":
    "كل ما تحتاج معرفته عن البيانات التي نجمعها — وعلى رأسها موقعك — وكيف نستخدمها، وحقوقك في التحكم فيها داخل تراك مي.",
  "home.updated": "آخر تحديث",

  "card.privacy.title": "سياسة الخصوصية",
  "card.privacy.desc":
    "أي بيانات نجمعها، وليه، وكيف نحميها، وحقوقك في التحكم فيها.",
  "card.terms.title": "شروط الاستخدام",
  "card.terms.desc":
    "قواعد استخدام التطبيق: الحساب، الطلبات والدفع، الإعلانات، والمحتوى.",
  "card.deletion.title": "حذف الحساب والبيانات",
  "card.deletion.desc":
    "كيف تحذف حسابك وبياناتك نهائيًا — وما الذي يُحذف وما الذي نحتفظ به.",
  "card.read": "اقرأ المستند",

  "doc.toc": "محتويات المستند",
  "doc.updated": "آخر تحديث",
  "doc.backHome": "المركز القانوني",
  "doc.contactTitle": "عندك سؤال؟",
  "doc.contactBody": "لأي استفسار حول هذا المستند، تواصل معنا على",
  "doc.top": "أعلى الصفحة",
  "doc.readingTime": "دقائق قراءة",

  "footer.line": "تراك مي — اعرف مكانهم، اطلب، وتابع طلبك لحظة بلحظة.",
  "footer.nav": "روابط",
  "footer.rights": "كل الحقوق محفوظة.",
};

const en: Record<keyof typeof ar, string> = {
  _title: "Track Me — Legal Center",
  _desc:
    "Privacy Policy, Terms of Service, and Account & Data Deletion for the Track Me app.",
  skip: "Skip to content",

  "nav.home": "Legal Center",
  "nav.privacy": "Privacy Policy",
  "nav.terms": "Terms of Service",
  "nav.deletion": "Delete Account",
  "nav.app": "The App",
  "nav.menu": "Menu",

  "home.eyebrow": "Legal Center",
  "home.title": "Transparency builds trust",
  "home.sub":
    "Everything you need to know about the data we collect — your location above all — how we use it, and your rights to control it inside Track Me.",
  "home.updated": "Last updated",

  "card.privacy.title": "Privacy Policy",
  "card.privacy.desc":
    "What data we collect, why, how we protect it, and your rights to control it.",
  "card.terms.title": "Terms of Service",
  "card.terms.desc":
    "The rules for using the app: accounts, orders & payments, listings, and content.",
  "card.deletion.title": "Account & Data Deletion",
  "card.deletion.desc":
    "How to permanently delete your account and data — and what is kept versus erased.",
  "card.read": "Read document",

  "doc.toc": "On this page",
  "doc.updated": "Last updated",
  "doc.backHome": "Legal Center",
  "doc.contactTitle": "Have a question?",
  "doc.contactBody": "For anything about this document, reach us at",
  "doc.top": "Back to top",
  "doc.readingTime": "min read",

  "footer.line": "Track Me — Find them, order, and follow it live.",
  "footer.nav": "Links",
  "footer.rights": "All rights reserved.",
};

export type I18nKey = keyof typeof ar;
export const DICT: Record<Lang, Record<I18nKey, string>> = { ar, en };
