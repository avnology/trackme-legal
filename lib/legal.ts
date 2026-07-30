/**
 * Track Me legal — long-form document content, both languages.
 *
 * Each document is an ordered list of sections; each section is an ordered
 * list of blocks. The <LegalDoc> component renders these and auto-builds the
 * table of contents from section ids + headings. Keep AR and EN section ids
 * identical and in the same order so the shared TOC and deep-links line up.
 *
 * NOTE: This is a thorough, product-specific template written to reflect how
 * the Track Me app actually works (location tracking, marketplace listings,
 * orders, chat, jobs, Paymob payments, FCM notifications). It is not a
 * substitute for review by a qualified lawyer before publication in a
 * specific jurisdiction.
 */
import type { Lang } from "@/lib/i18n";

export type DocSlug = "privacy" | "terms" | "account-deletion";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "note"; text: string }
  | { type: "steps"; items: string[] };

export type Section = { id: string; heading: string; blocks: Block[] };

export type LegalDocument = {
  slug: DocSlug;
  title: string;
  intro: string;
  sections: Section[];
};

/* ════════════════════════════════════════════════════════════════════
   PRIVACY POLICY
   ════════════════════════════════════════════════════════════════════ */

const privacyAr: LegalDocument = {
  slug: "privacy",
  title: "سياسة الخصوصية",
  intro:
    "خصوصيتك مسؤولية نأخذها على محمل الجد. توضح هذه السياسة أنواع البيانات التي يجمعها تطبيق تراك مي («التطبيق»، «الخدمة»، «نحن»)، وكيف نستخدمها ونحميها، وما هي حقوقك في التحكم بها. باستخدامك للتطبيق فأنت توافق على الممارسات الموضحة هنا.",
  sections: [
    {
      id: "who-we-are",
      heading: "1. من نحن",
      blocks: [
        {
          type: "p",
          text: "تراك مي منصة تربط أصحاب العربات والشاحنات المتنقلة (مثل عربات الطعام) بالعملاء: تصفّح المتاجر والمنتجات، تتبّع موقع العربة على الخريطة لحظة بلحظة، إنشاء الطلبات والدفع، محادثات مباشرة بين الطرفين، وإعلانات وظائف وتقديم عليها. مطوّر التطبيق ومشغّل الخدمة هو الجهة المسؤولة عن معالجة بياناتك («المتحكّم في البيانات»).",
        },
        {
          type: "p",
          text: "تسري هذه السياسة على تطبيقات تراك مي لأنظمة iOS و Android وأي مواقع أو خدمات مرتبطة بها.",
        },
      ],
    },
    {
      id: "data-we-collect",
      heading: "2. البيانات التي نجمعها",
      blocks: [
        { type: "h3", text: "بيانات تقدّمها أنت" },
        {
          type: "ul",
          items: [
            "بيانات الحساب: الاسم الكامل، البريد الإلكتروني، رقم الهاتف، الصورة الشخصية، المدينة والدولة.",
            "نوع الحساب: عميل، أو صاحب نشاط، أو موظف تابع لنشاط — وهو ما يحدّد الصلاحيات المتاحة لك.",
            "تفضيلاتك داخل التطبيق ولغة الواجهة المختارة.",
            "بيانات النشاط التجاري إن كنت صاحب عربة: اسم العربة، الوصف، القائمة والمنتجات والأسعار، ساعات العمل، والصور.",
            "محتوى تنشره أنت: التقييمات والمراجعات، منشورات المجتمع، البلاغات، وإعلانات الوظائف أو طلبات التقديم عليها.",
            "رسائل المحادثات التي ترسلها للطرف الآخر داخل التطبيق.",
          ],
        },
        { type: "h3", text: "بيانات تُجمع تلقائيًا" },
        {
          type: "ul",
          items: [
            "بيانات الموقع الجغرافي — راجع القسم المخصص لها أدناه.",
            "معرّف الجهاز الخاص بالإشعارات (رمز Firebase Cloud Messaging) لإرسال تنبيهات الطلبات والرسائل.",
            "بيانات تقنية أساسية: نوع الجهاز ونظام التشغيل، إصدار التطبيق، حالة الاتصال بالشبكة، المنطقة الزمنية، ولغة الجهاز.",
            "سجلات الاستخدام والأخطاء التي تساعدنا على تشخيص الأعطال وتحسين الأداء.",
          ],
        },
        { type: "h3", text: "بيانات لا نجمعها" },
        {
          type: "ul",
          items: [
            "لا نجمع ولا نخزّن بيانات بطاقتك البنكية على خوادمنا إطلاقًا — راجع قسم المدفوعات.",
            "لا نطّلع على جهات اتصالك، ولا رسائلك خارج التطبيق، ولا ملفات جهازك خارج ما تختاره بنفسك.",
            "لا نبيع بياناتك الشخصية لأي طرف ثالث.",
          ],
        },
      ],
    },
    {
      id: "location",
      heading: "3. بيانات الموقع الجغرافي",
      blocks: [
        {
          type: "p",
          text: "الموقع هو جوهر عمل تراك مي، ولذلك نفرد له قسمًا مستقلاً حتى تكون الصورة واضحة تمامًا.",
        },
        { type: "h3", text: "إن كنت عميلاً" },
        {
          type: "ul",
          items: [
            "نستخدم موقعك لعرض العربات والمتاجر القريبة منك وترتيبها حسب المسافة، ولتحديد موقعك على الخريطة، وللمساعدة في تحديد عنوان التوصيل.",
            "نطلب الموقع أثناء استخدام التطبيق فقط (When In Use). لا نتتبّع موقعك في الخلفية عندما يكون التطبيق مغلقًا.",
            "لا يُعرض موقعك الدقيق لأصحاب العربات؛ ما يصلهم هو عنوان أو نقطة التوصيل التي تؤكدها أنت عند إنشاء الطلب.",
          ],
        },
        { type: "h3", text: "إن كنت صاحب عربة أو موظفًا" },
        {
          type: "ul",
          items: [
            "يُنشر موقع عربتك للعملاء أثناء تشغيلك لخاصية التتبّع، وهذا هو الغرض الأساسي من الخدمة التي اشتركت فيها.",
            "التحكم بيدك: يمكنك إيقاف بث الموقع في أي وقت، وعندها تختفي العربة من الخريطة اللحظية.",
            "موقع العربة يُعامل كبيان تجاري متاح للعملاء، لا كبيان شخصي خاص — انتبه لذلك قبل تشغيل البث من موقع سكنك.",
          ],
        },
        {
          type: "note",
          text: "يمكنك سحب إذن الموقع في أي لحظة من إعدادات النظام على جهازك. التطبيق سيظل يعمل، لكن ميزات القرب والخريطة والتتبّع اللحظي ستتوقف عن العمل بشكل صحيح.",
        },
      ],
    },
    {
      id: "how-we-use",
      heading: "4. كيف نستخدم بياناتك",
      blocks: [
        {
          type: "ul",
          items: [
            "تشغيل الخدمة: إنشاء حسابك، عرض العربات القريبة، تنفيذ الطلبات، وتوصيل رسائل المحادثة.",
            "الإشعارات: تنبيهك بتحديثات حالة الطلب، الرسائل الجديدة، والعروض — ويمكنك إيقافها من إعدادات جهازك.",
            "الدعم الفني: الرد على استفساراتك وحل مشكلات الطلبات والنزاعات بين الطرفين.",
            "الأمان ومنع الاحتيال: كشف الحسابات المزيفة والمحتوى المخالف ومعالجة البلاغات.",
            "التحسين: فهم أنماط الاستخدام بشكل مُجمّع لتطوير المزايا وإصلاح الأعطال.",
            "الالتزام القانوني: الاحتفاظ بالسجلات المطلوبة والاستجابة للطلبات الرسمية المشروعة.",
          ],
        },
      ],
    },
    {
      id: "legal-basis",
      heading: "5. الأساس القانوني للمعالجة",
      blocks: [
        {
          type: "ul",
          items: [
            "تنفيذ العقد: معالجة البيانات اللازمة لتقديم الخدمة التي طلبتها، مثل تنفيذ طلب أو إيصال رسالة.",
            "موافقتك الصريحة: الوصول إلى الموقع والكاميرا والصور والإشعارات — وتستطيع سحبها في أي وقت.",
            "المصلحة المشروعة: أمن المنصة، منع الاحتيال، وتحسين المنتج، بما لا يتعارض مع حقوقك.",
            "الالتزام القانوني: عند وجود التزام نظامي يفرض علينا الاحتفاظ ببيانات معيّنة أو الإفصاح عنها.",
          ],
        },
      ],
    },
    {
      id: "sharing",
      heading: "6. مشاركة البيانات",
      blocks: [
        {
          type: "p",
          text: "لا نبيع بياناتك. نشاركها فقط في الحالات التالية وبالقدر اللازم:",
        },
        {
          type: "ul",
          items: [
            "الطرف الآخر في المعاملة: عند إنشاء طلب، يرى صاحب العربة اسمك ووسيلة التواصل وتفاصيل الطلب ونقطة التوصيل التي أكدتها.",
            "مزوّدو الدفع: تُعالَج المدفوعات عبر بوابة Paymob، وتُرسَل بيانات بطاقتك مباشرة إليها دون المرور بخوادمنا.",
            "خرائط Google: لعرض الخرائط وحساب المسافات والاتجاهات.",
            "Firebase من Google: لإرسال الإشعارات الفورية.",
            "Google و Apple: عند اختيارك تسجيل الدخول عبر حسابك لديهما، وفق سياسات الخصوصية الخاصة بهما.",
            "مزوّدو الاستضافة والبنية التحتية الذين يشغّلون خوادمنا بموجب اتفاقيات سرية.",
            "الجهات الرسمية: عند وجود طلب قانوني صحيح أو لحماية حقوقنا وسلامة المستخدمين.",
          ],
        },
      ],
    },
    {
      id: "permissions",
      heading: "7. أذونات الجهاز",
      blocks: [
        {
          type: "p",
          text: "لا يطلب التطبيق أي إذن إلا عند الحاجة الفعلية له، ويشرح سبب الطلب قبل عرضه:",
        },
        {
          type: "ul",
          items: [
            "الموقع: لعرض العربات القريبة وتحديد موقعك على الخريطة وتتبّع العربة لحظيًا.",
            "الكاميرا: لالتقاط صورة شخصية أو صورة لمنتج أو عربة.",
            "الصور: لاختيار صورة من معرض جهازك ورفعها.",
            "الإشعارات: لتنبيهك بتحديثات الطلبات والرسائل الجديدة.",
          ],
        },
        {
          type: "note",
          text: "كل هذه الأذونات اختيارية ويمكن سحبها من إعدادات جهازك في أي وقت، وسيستمر التطبيق في العمل مع تعطّل الميزة المرتبطة بالإذن الملغى.",
        },
      ],
    },
    {
      id: "payments",
      heading: "8. المدفوعات",
      blocks: [
        {
          type: "p",
          text: "تتم عمليات الدفع داخل التطبيق عبر بوابة الدفع Paymob، وهي جهة معالجة دفع مستقلة وملتزمة بمعيار PCI DSS.",
        },
        {
          type: "ul",
          items: [
            "بيانات بطاقتك تُدخَل داخل واجهة البوابة وتُرسَل إليها مباشرة — نحن لا نراها ولا نخزّنها ولا نمرّرها عبر خوادمنا.",
            "ما نحتفظ به هو سجل المعاملة فقط: رقمها المرجعي، المبلغ، حالتها، وتاريخها — لأغراض الفواتير وحل النزاعات.",
            "تخضع معالجة بيانات الدفع لسياسة خصوصية Paymob بالإضافة إلى هذه السياسة.",
          ],
        },
      ],
    },
    {
      id: "security",
      heading: "9. أمن البيانات",
      blocks: [
        {
          type: "ul",
          items: [
            "كل الاتصالات بين التطبيق وخوادمنا مشفّرة عبر HTTPS/TLS.",
            "رمز الدخول الخاص بحسابك يُحفظ في المخزن الآمن للجهاز (Keychain على iOS و Keystore على Android)، لا في مساحة تخزين عادية.",
            "الوصول إلى بيانات المستخدمين داخليًا مقيّد بمبدأ الحاجة إلى المعرفة.",
            "نراجع الصلاحيات والاعتماديات البرمجية دوريًا لسد الثغرات المعروفة.",
          ],
        },
        {
          type: "note",
          text: "لا توجد وسيلة نقل أو تخزين إلكتروني آمنة بنسبة 100%. نبذل جهدًا معقولًا لحماية بياناتك، لكننا لا نستطيع ضمان الأمان المطلق. إن اشتبهت في اختراق حسابك، تواصل معنا فورًا.",
        },
      ],
    },
    {
      id: "retention",
      heading: "10. مدة الاحتفاظ بالبيانات",
      blocks: [
        {
          type: "ul",
          items: [
            "بيانات حسابك: طوال فترة نشاط الحساب، وتُحذف بعد طلب الحذف وفق ما هو موضح في صفحة حذف الحساب.",
            "بيانات الموقع اللحظي: لا نبني منها سجلاً تاريخيًا لتحركاتك؛ يُستخدم آخر موقع معروف للعرض ثم يُستبدل.",
            "الطلبات والمعاملات المالية: تُحفظ للمدة التي تفرضها المتطلبات المحاسبية والنظامية حتى بعد حذف الحساب، بعد فصلها عن هويتك حيثما أمكن.",
            "المحادثات: تُحفظ ما دام الطرفان نشطين، وتُحذف نسختك منها عند حذف حسابك.",
            "سجلات الأمان والاحتيال: لمدة محدودة تخدم غرض الحماية فقط.",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      heading: "11. حقوقك",
      blocks: [
        {
          type: "ul",
          items: [
            "الوصول: أن تطلب نسخة من بياناتك الشخصية لدينا.",
            "التصحيح: تعديل أي بيانات غير دقيقة، ومعظمها قابل للتعديل مباشرة من شاشة الملف الشخصي.",
            "الحذف: طلب حذف حسابك وبياناتك — راجع صفحة حذف الحساب.",
            "الاعتراض والتقييد: الاعتراض على أنواع معيّنة من المعالجة أو طلب تقييدها.",
            "سحب الموافقة: إيقاف أذونات الموقع أو الإشعارات في أي وقت من إعدادات جهازك.",
            "الشكوى: التقدّم بشكوى إلى الجهة الرقابية المختصة في بلدك.",
          ],
        },
        {
          type: "p",
          text: "للممارسة أي من هذه الحقوق راسلنا، وسنستجيب خلال مدة معقولة لا تتجاوز ثلاثين يومًا.",
        },
      ],
    },
    {
      id: "children",
      heading: "12. خصوصية الأطفال",
      blocks: [
        {
          type: "p",
          text: "التطبيق غير موجّه لمن هم دون سن الثالثة عشرة، ولا نجمع بياناتهم عن قصد. إن علمنا بجمع بيانات طفل دون هذا السن دون موافقة وليّ أمره، سنحذفها فورًا. إن كنت وليّ أمر وتعتقد أن طفلك زوّدنا ببياناته، تواصل معنا.",
        },
      ],
    },
    {
      id: "international",
      heading: "13. نقل البيانات دوليًا",
      blocks: [
        {
          type: "p",
          text: "قد تُخزَّن بياناتك أو تُعالَج على خوادم خارج بلد إقامتك، لدى مزوّدي بنية تحتية موثوقين. في هذه الحالات نتخذ خطوات معقولة لضمان بقاء مستوى الحماية متوافقًا مع هذه السياسة.",
        },
      ],
    },
    {
      id: "changes",
      heading: "14. تعديلات هذه السياسة",
      blocks: [
        {
          type: "p",
          text: "قد نحدّث هذه السياسة من حين لآخر لتعكس تغييرات في التطبيق أو في المتطلبات النظامية. سيظهر تاريخ آخر تحديث أعلى الصفحة، وسننبّهك داخل التطبيق عند وجود تغيير جوهري. استمرارك في استخدام التطبيق بعد التحديث يعني موافقتك على النسخة الجديدة.",
        },
      ],
    },
    {
      id: "contact",
      heading: "15. التواصل معنا",
      blocks: [
        {
          type: "p",
          text: "لأي سؤال أو طلب يتعلق بخصوصيتك أو ببياناتك الشخصية، تواصل معنا وسنرد في أقرب وقت ممكن.",
        },
      ],
    },
  ],
};

const privacyEn: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  intro:
    "Your privacy is a responsibility we take seriously. This policy explains what data the Track Me app (“the app”, “the service”, “we”) collects, how we use and protect it, and what rights you have over it. By using the app you agree to the practices described here.",
  sections: [
    {
      id: "who-we-are",
      heading: "1. Who we are",
      blocks: [
        {
          type: "p",
          text: "Track Me is a platform that connects owners of mobile trucks and vehicles (such as food trucks) with customers: browsing shops and products, following a truck's location live on the map, placing and paying for orders, direct chat between both sides, and job postings with applications. The app's developer and service operator is the party responsible for processing your data (the “data controller”).",
        },
        {
          type: "p",
          text: "This policy covers the Track Me apps for iOS and Android and any related websites or services.",
        },
      ],
    },
    {
      id: "data-we-collect",
      heading: "2. Data we collect",
      blocks: [
        { type: "h3", text: "Data you provide" },
        {
          type: "ul",
          items: [
            "Account data: full name, email address, phone number, profile photo, city and country.",
            "Account type: customer, business owner, or staff member of a business — this determines the permissions available to you.",
            "Your in-app preferences and chosen interface language.",
            "Business data if you are a truck owner: truck name, description, menu, products and prices, working hours, and photos.",
            "Content you publish: ratings and reviews, community posts, reports, and job listings or applications.",
            "Chat messages you send to the other party inside the app.",
          ],
        },
        { type: "h3", text: "Data collected automatically" },
        {
          type: "ul",
          items: [
            "Location data — see the dedicated section below.",
            "Your device's notification identifier (Firebase Cloud Messaging token) so we can send order and message alerts.",
            "Basic technical data: device type and operating system, app version, network connectivity state, time zone, and device language.",
            "Usage and error logs that help us diagnose crashes and improve performance.",
          ],
        },
        { type: "h3", text: "Data we do not collect" },
        {
          type: "ul",
          items: [
            "We never collect or store your bank card details on our servers — see the payments section.",
            "We do not access your contacts, your messages outside the app, or files on your device beyond what you choose to share.",
            "We do not sell your personal data to any third party.",
          ],
        },
      ],
    },
    {
      id: "location",
      heading: "3. Location data",
      blocks: [
        {
          type: "p",
          text: "Location is the core of how Track Me works, so we give it its own section to make the picture completely clear.",
        },
        { type: "h3", text: "If you are a customer" },
        {
          type: "ul",
          items: [
            "We use your location to show trucks and shops near you sorted by distance, to place you on the map, and to help set a delivery address.",
            "We request location only while you are using the app (When In Use). We do not track your location in the background when the app is closed.",
            "Your precise location is not shown to truck owners; what reaches them is the address or delivery point you confirm when placing an order.",
          ],
        },
        { type: "h3", text: "If you are an owner or staff member" },
        {
          type: "ul",
          items: [
            "Your truck's location is published to customers while you have live tracking switched on — that is the primary purpose of the service you signed up for.",
            "You stay in control: you can stop broadcasting at any moment, and the truck then disappears from the live map.",
            "Truck location is treated as business information available to customers, not as private personal data — keep that in mind before broadcasting from your home address.",
          ],
        },
        {
          type: "note",
          text: "You can revoke the location permission at any time from your device settings. The app will keep working, but nearby search, the map, and live tracking will no longer function properly.",
        },
      ],
    },
    {
      id: "how-we-use",
      heading: "4. How we use your data",
      blocks: [
        {
          type: "ul",
          items: [
            "Running the service: creating your account, showing nearby trucks, fulfilling orders, and delivering chat messages.",
            "Notifications: alerting you to order status updates, new messages, and offers — you can turn these off in your device settings.",
            "Support: answering your questions and resolving order issues and disputes between parties.",
            "Safety and fraud prevention: detecting fake accounts and violating content, and acting on reports.",
            "Improvement: understanding usage patterns in aggregate to develop features and fix defects.",
            "Legal compliance: keeping required records and responding to valid official requests.",
          ],
        },
      ],
    },
    {
      id: "legal-basis",
      heading: "5. Legal basis for processing",
      blocks: [
        {
          type: "ul",
          items: [
            "Performance of a contract: processing needed to deliver the service you asked for, such as fulfilling an order or delivering a message.",
            "Your explicit consent: access to location, camera, photos, and notifications — which you can withdraw at any time.",
            "Legitimate interest: platform security, fraud prevention, and product improvement, where these do not override your rights.",
            "Legal obligation: where a statutory duty requires us to retain or disclose particular data.",
          ],
        },
      ],
    },
    {
      id: "sharing",
      heading: "6. Sharing your data",
      blocks: [
        {
          type: "p",
          text: "We do not sell your data. We share it only in the following cases and only to the extent necessary:",
        },
        {
          type: "ul",
          items: [
            "The other party to a transaction: when you place an order, the truck owner sees your name, contact method, order details, and the delivery point you confirmed.",
            "Payment providers: payments are processed through the Paymob gateway, and your card details go directly to it without passing through our servers.",
            "Google Maps: to render maps and calculate distances and directions.",
            "Firebase by Google: to deliver push notifications.",
            "Google and Apple: when you choose to sign in with your account there, subject to their own privacy policies.",
            "Hosting and infrastructure providers that operate our servers under confidentiality agreements.",
            "Authorities: where there is a valid legal request or a need to protect our rights and user safety.",
          ],
        },
      ],
    },
    {
      id: "permissions",
      heading: "7. Device permissions",
      blocks: [
        {
          type: "p",
          text: "The app requests a permission only when it genuinely needs it, and explains why before the prompt appears:",
        },
        {
          type: "ul",
          items: [
            "Location: to show nearby trucks, place you on the map, and follow a truck live.",
            "Camera: to take a profile photo or a photo of a product or truck.",
            "Photos: to pick an image from your device gallery and upload it.",
            "Notifications: to alert you to order updates and new messages.",
          ],
        },
        {
          type: "note",
          text: "All of these permissions are optional and can be revoked from your device settings at any time. The app keeps working, with the feature tied to the revoked permission disabled.",
        },
      ],
    },
    {
      id: "payments",
      heading: "8. Payments",
      blocks: [
        {
          type: "p",
          text: "In-app payments are handled by the Paymob payment gateway, an independent PCI DSS compliant payment processor.",
        },
        {
          type: "ul",
          items: [
            "Your card details are entered inside the gateway's interface and sent directly to it — we never see, store, or route them through our servers.",
            "What we keep is the transaction record only: its reference number, amount, status, and date — for invoicing and dispute resolution.",
            "Payment data processing is also governed by Paymob's privacy policy in addition to this one.",
          ],
        },
      ],
    },
    {
      id: "security",
      heading: "9. Data security",
      blocks: [
        {
          type: "ul",
          items: [
            "All traffic between the app and our servers is encrypted over HTTPS/TLS.",
            "Your account access token is held in the device's secure store (Keychain on iOS, Keystore on Android), not in ordinary storage.",
            "Internal access to user data is restricted on a need-to-know basis.",
            "We review permissions and software dependencies regularly to close known vulnerabilities.",
          ],
        },
        {
          type: "note",
          text: "No method of electronic transmission or storage is 100% secure. We make reasonable efforts to protect your data but cannot guarantee absolute security. If you suspect your account has been compromised, contact us immediately.",
        },
      ],
    },
    {
      id: "retention",
      heading: "10. How long we keep data",
      blocks: [
        {
          type: "ul",
          items: [
            "Account data: for as long as the account is active, and deleted after a deletion request as described on the account deletion page.",
            "Live location data: we do not build a historical trail of your movements; the last known location is used for display and then replaced.",
            "Orders and financial transactions: retained for the period required by accounting and regulatory rules even after account deletion, decoupled from your identity where possible.",
            "Chats: retained while both parties remain active, and your copy is deleted when your account is deleted.",
            "Security and fraud logs: for a limited period serving that protective purpose only.",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      heading: "11. Your rights",
      blocks: [
        {
          type: "ul",
          items: [
            "Access: request a copy of the personal data we hold about you.",
            "Rectification: correct inaccurate data — most of it is editable directly from the profile screen.",
            "Erasure: request deletion of your account and data — see the account deletion page.",
            "Objection and restriction: object to certain kinds of processing or ask us to restrict them.",
            "Withdraw consent: turn off location or notification permissions at any time from your device settings.",
            "Complaint: lodge a complaint with the competent supervisory authority in your country.",
          ],
        },
        {
          type: "p",
          text: "To exercise any of these rights, write to us and we will respond within a reasonable period not exceeding thirty days.",
        },
      ],
    },
    {
      id: "children",
      heading: "12. Children's privacy",
      blocks: [
        {
          type: "p",
          text: "The app is not directed at anyone under 13, and we do not knowingly collect their data. If we learn that we have collected data from a child under that age without parental consent, we will delete it promptly. If you are a parent and believe your child has provided us with data, please contact us.",
        },
      ],
    },
    {
      id: "international",
      heading: "13. International transfers",
      blocks: [
        {
          type: "p",
          text: "Your data may be stored or processed on servers outside your country of residence, with trusted infrastructure providers. In those cases we take reasonable steps to ensure the level of protection remains consistent with this policy.",
        },
      ],
    },
    {
      id: "changes",
      heading: "14. Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We may update this policy from time to time to reflect changes in the app or in regulatory requirements. The last-updated date appears at the top of the page, and we will notify you in the app when a change is material. Continuing to use the app after an update means you accept the new version.",
        },
      ],
    },
    {
      id: "contact",
      heading: "15. Contact us",
      blocks: [
        {
          type: "p",
          text: "For any question or request about your privacy or personal data, get in touch and we will respond as soon as we can.",
        },
      ],
    },
  ],
};

/* ════════════════════════════════════════════════════════════════════
   TERMS OF SERVICE
   ════════════════════════════════════════════════════════════════════ */

const termsAr: LegalDocument = {
  slug: "terms",
  title: "شروط الاستخدام",
  intro:
    "تحكم هذه الشروط استخدامك لتطبيق تراك مي. باستخدامك للتطبيق فأنت تقرّ بأنك قرأت هذه الشروط ووافقت على الالتزام بها. إن كنت لا توافق عليها، فضلاً لا تستخدم الخدمة.",
  sections: [
    {
      id: "eligibility",
      heading: "1. الأهلية والحساب",
      blocks: [
        {
          type: "ul",
          items: [
            "يجب أن تكون قد بلغت السن القانوني في بلدك لإبرام العقود، أو تستخدم التطبيق تحت إشراف وليّ أمرك.",
            "تلتزم بتقديم بيانات صحيحة وحديثة عند التسجيل، وبتحديثها عند تغيّرها.",
            "أنت مسؤول عن الحفاظ على سرية بيانات دخولك وعن كل نشاط يتم عبر حسابك.",
            "يمكنك تصفّح جزء من التطبيق كزائر دون تسجيل، لكن الطلبات والمحادثات والتفاعل تتطلب حسابًا.",
            "يُمنع إنشاء حسابات متعددة بغرض التحايل أو التلاعب بالتقييمات.",
          ],
        },
      ],
    },
    {
      id: "roles",
      heading: "2. أنواع الحسابات",
      blocks: [
        {
          type: "ul",
          items: [
            "حساب عميل: للتصفّح، إنشاء الطلبات، التقييم، والتواصل مع أصحاب العربات.",
            "حساب صاحب نشاط: لإدارة عربة أو أكثر، نشر المنتجات والأسعار، بث الموقع، واستقبال الطلبات.",
            "حساب موظف: صلاحيات محدودة يمنحها صاحب النشاط لإدارة الطلبات أو بث الموقع نيابة عنه.",
          ],
        },
        {
          type: "p",
          text: "صاحب النشاط مسؤول عن تصرفات الموظفين التابعين له داخل التطبيق.",
        },
      ],
    },
    {
      id: "acceptable-use",
      heading: "3. الاستخدام المقبول",
      blocks: [
        { type: "p", text: "يُمنع منعًا باتًا استخدام التطبيق في أي مما يلي:" },
        {
          type: "ul",
          items: [
            "نشر محتوى مخالف للقانون أو مسيء أو تمييزي أو محرّض على الكراهية أو العنف.",
            "عرض منتجات أو خدمات محظورة نظامًا، أو مخالفة لاشتراطات السلامة الغذائية.",
            "انتحال شخصية غيرك أو ادعاء صفة لا تملكها.",
            "التلاعب بالتقييمات والمراجعات أو نشر بلاغات كيدية.",
            "بث موقع غير حقيقي للعربة أو التلاعب ببيانات الموقع.",
            "محاولة اختراق التطبيق أو خوادمه، أو الوصول لبيانات مستخدمين آخرين، أو استخدام أدوات آلية لسحب البيانات.",
            "استخدام بيانات التواصل التي تصلك عبر الطلبات لأي غرض خارج تنفيذ الطلب.",
          ],
        },
      ],
    },
    {
      id: "content",
      heading: "4. المحتوى الذي تنشره",
      blocks: [
        {
          type: "ul",
          items: [
            "تحتفظ بملكية المحتوى الذي تنشره، وتمنحنا ترخيصًا غير حصري لعرضه وتوزيعه داخل التطبيق بغرض تشغيل الخدمة.",
            "أنت وحدك المسؤول عن دقة وقانونية ما تنشره، بما في ذلك أوصاف المنتجات والأسعار.",
            "يحق لنا إزالة أي محتوى مخالف أو إخفاؤه دون إشعار مسبق عند الضرورة.",
            "يوفّر التطبيق أداة للإبلاغ عن المحتوى المخالف، ونراجع البلاغات الجادة في وقت معقول.",
          ],
        },
      ],
    },
    {
      id: "orders",
      heading: "5. الطلبات والتنفيذ",
      blocks: [
        {
          type: "p",
          text: "تراك مي منصة وسيطة تربط العميل بصاحب العربة. العقد الفعلي لبيع المنتج أو تقديم الخدمة يقوم بين الطرفين مباشرة، لا بيننا وبينك.",
        },
        {
          type: "ul",
          items: [
            "صاحب العربة مسؤول عن دقة وصف المنتجات وأسعارها وتوافرها وجودتها وسلامتها.",
            "العميل مسؤول عن صحة بيانات الطلب ونقطة الاستلام ووسيلة التواصل.",
            "قد يُرفض الطلب أو يُلغى من أي من الطرفين وفق سياسة الإلغاء المعروضة عند الطلب.",
            "أي نزاع حول جودة المنتج أو التنفيذ يُحل بين الطرفين أولًا، ويمكننا التوسّط في حدود ما تتيحه سجلات المنصة.",
          ],
        },
      ],
    },
    {
      id: "payments",
      heading: "6. الأسعار والدفع",
      blocks: [
        {
          type: "ul",
          items: [
            "تُعرض الأسعار بالعملة المحلية، ويحدّدها صاحب العربة وقد تتغيّر في أي وقت قبل تأكيد الطلب.",
            "تتم المدفوعات الإلكترونية عبر بوابة Paymob، وتخضع لشروطها إلى جانب هذه الشروط.",
            "الاسترداد يخضع لسياسة صاحب النشاط ولقواعد بوابة الدفع، وقد يستغرق عدة أيام عمل حتى يظهر في حسابك.",
            "أي رسوم خدمة أو عمولة تخص المنصة تُعرض بوضوح قبل إتمام الدفع.",
          ],
        },
      ],
    },
    {
      id: "location-accuracy",
      heading: "7. دقة الموقع والتتبّع",
      blocks: [
        {
          type: "p",
          text: "خدمة التتبّع اللحظي تعتمد على إشارة GPS الخاصة بجهاز صاحب العربة وعلى جودة اتصاله بالإنترنت.",
        },
        {
          type: "ul",
          items: [
            "لا نضمن دقة الموقع المعروض أو استمراريته أو خلوّه من التأخير.",
            "ظهور العربة على الخريطة لا يعني بالضرورة أنها مفتوحة أو أن كل المنتجات متاحة.",
            "ننصح دائمًا بالتواصل مع صاحب العربة عبر المحادثة قبل التحرك إليها.",
            "لا نتحمل مسؤولية أي ضرر أو تكلفة تنتج عن الاعتماد على بيانات موقع غير دقيقة.",
          ],
        },
      ],
    },
    {
      id: "jobs",
      heading: "8. إعلانات الوظائف",
      blocks: [
        {
          type: "ul",
          items: [
            "إعلانات الوظائف ينشرها أصحاب الأنشطة على مسؤوليتهم، ولا نتحقق من صحتها أو جدّيتها.",
            "التقديم على وظيفة والتفاوض والتوظيف تتم بين المتقدّم وصاحب العمل مباشرة خارج نطاق مسؤوليتنا.",
            "يُمنع طلب أي مبالغ مالية من المتقدّمين مقابل التوظيف، وسنحذف أي إعلان يخالف ذلك.",
          ],
        },
      ],
    },
    {
      id: "termination",
      heading: "9. تعليق الحساب وإنهاؤه",
      blocks: [
        {
          type: "ul",
          items: [
            "يمكنك إنهاء استخدامك للخدمة في أي وقت بحذف حسابك.",
            "يحق لنا تعليق أو إنهاء أي حساب يخالف هذه الشروط أو يهدد سلامة المستخدمين أو المنصة.",
            "في حالات المخالفة الجسيمة قد يتم التعليق فورًا ودون إشعار مسبق.",
            "إنهاء الحساب لا يُسقط الالتزامات المالية القائمة قبل الإنهاء.",
          ],
        },
      ],
    },
    {
      id: "disclaimer",
      heading: "10. إخلاء المسؤولية وحدودها",
      blocks: [
        {
          type: "p",
          text: "تُقدَّم الخدمة «كما هي» و«حسب توافرها» دون أي ضمانات صريحة أو ضمنية.",
        },
        {
          type: "ul",
          items: [
            "لا نضمن أن يكون التطبيق متاحًا دون انقطاع أو خاليًا من الأخطاء.",
            "لا نتحمل مسؤولية جودة المنتجات أو الخدمات التي يقدّمها أصحاب الأنشطة.",
            "لا نتحمل مسؤولية الأضرار غير المباشرة أو التبعية أو فوات الكسب.",
            "في كل الأحوال، تقتصر مسؤوليتنا الإجمالية على المبالغ التي دفعتها لنا خلال الاثني عشر شهرًا السابقة للحدث، إن وُجدت.",
          ],
        },
      ],
    },
    {
      id: "changes-law",
      heading: "11. التعديلات والقانون الواجب التطبيق",
      blocks: [
        {
          type: "p",
          text: "قد نعدّل هذه الشروط من وقت لآخر، وسنعلن عن التعديلات الجوهرية داخل التطبيق. استمرارك في الاستخدام بعد التعديل يعني قبولك له. تخضع هذه الشروط لقوانين البلد الذي يعمل فيه مشغّل الخدمة، وتختص محاكمه بأي نزاع ينشأ عنها.",
        },
      ],
    },
    {
      id: "contact",
      heading: "12. التواصل معنا",
      blocks: [
        {
          type: "p",
          text: "لأي استفسار حول هذه الشروط أو حول حقوقك والتزاماتك، تواصل معنا.",
        },
      ],
    },
  ],
};

const termsEn: LegalDocument = {
  slug: "terms",
  title: "Terms of Service",
  intro:
    "These terms govern your use of the Track Me app. By using the app you confirm that you have read these terms and agree to be bound by them. If you do not agree, please do not use the service.",
  sections: [
    {
      id: "eligibility",
      heading: "1. Eligibility and your account",
      blocks: [
        {
          type: "ul",
          items: [
            "You must have reached the legal age to enter into contracts in your country, or use the app under the supervision of a parent or guardian.",
            "You agree to provide accurate, current information when registering and to keep it up to date.",
            "You are responsible for keeping your login credentials confidential and for all activity under your account.",
            "You may browse part of the app as a guest without registering, but orders, chats, and interaction require an account.",
            "Creating multiple accounts to circumvent rules or manipulate ratings is prohibited.",
          ],
        },
      ],
    },
    {
      id: "roles",
      heading: "2. Account types",
      blocks: [
        {
          type: "ul",
          items: [
            "Customer account: browse, place orders, leave ratings, and contact truck owners.",
            "Business owner account: manage one or more trucks, publish products and prices, broadcast location, and receive orders.",
            "Staff account: limited permissions granted by a business owner to manage orders or broadcast location on their behalf.",
          ],
        },
        {
          type: "p",
          text: "The business owner is responsible for the actions of their staff members inside the app.",
        },
      ],
    },
    {
      id: "acceptable-use",
      heading: "3. Acceptable use",
      blocks: [
        {
          type: "p",
          text: "Using the app for any of the following is strictly prohibited:",
        },
        {
          type: "ul",
          items: [
            "Publishing content that is unlawful, abusive, discriminatory, or that incites hatred or violence.",
            "Listing products or services that are legally prohibited or that violate food safety requirements.",
            "Impersonating another person or claiming a status you do not hold.",
            "Manipulating ratings and reviews or filing malicious reports.",
            "Broadcasting a false truck location or tampering with location data.",
            "Attempting to breach the app or its servers, access other users' data, or use automated tools to scrape data.",
            "Using contact details received through orders for any purpose beyond fulfilling that order.",
          ],
        },
      ],
    },
    {
      id: "content",
      heading: "4. Content you publish",
      blocks: [
        {
          type: "ul",
          items: [
            "You retain ownership of the content you publish and grant us a non-exclusive licence to display and distribute it inside the app for the purpose of operating the service.",
            "You alone are responsible for the accuracy and legality of what you publish, including product descriptions and prices.",
            "We may remove or hide violating content without prior notice where necessary.",
            "The app provides a reporting tool for violating content, and we review serious reports within a reasonable time.",
          ],
        },
      ],
    },
    {
      id: "orders",
      heading: "5. Orders and fulfilment",
      blocks: [
        {
          type: "p",
          text: "Track Me is an intermediary platform connecting customers with truck owners. The actual contract to sell a product or provide a service is formed directly between those two parties, not between us and you.",
        },
        {
          type: "ul",
          items: [
            "The truck owner is responsible for the accuracy of product descriptions, prices, availability, quality, and safety.",
            "The customer is responsible for the accuracy of order details, the pickup point, and contact information.",
            "An order may be refused or cancelled by either party in line with the cancellation policy shown at order time.",
            "Any dispute over product quality or fulfilment is resolved between the parties first; we can mediate within the limits of what the platform's records show.",
          ],
        },
      ],
    },
    {
      id: "payments",
      heading: "6. Prices and payment",
      blocks: [
        {
          type: "ul",
          items: [
            "Prices are shown in the local currency, are set by the truck owner, and may change at any time before an order is confirmed.",
            "Electronic payments are processed through the Paymob gateway and are subject to its terms alongside these terms.",
            "Refunds are subject to the business owner's policy and the payment gateway's rules, and may take several business days to appear in your account.",
            "Any platform service fee or commission is displayed clearly before payment is completed.",
          ],
        },
      ],
    },
    {
      id: "location-accuracy",
      heading: "7. Location accuracy and tracking",
      blocks: [
        {
          type: "p",
          text: "Live tracking depends on the GPS signal of the truck owner's device and the quality of their internet connection.",
        },
        {
          type: "ul",
          items: [
            "We do not guarantee that the displayed location is accurate, continuous, or free of delay.",
            "A truck appearing on the map does not necessarily mean it is open or that every product is available.",
            "We always recommend contacting the truck owner via chat before travelling to them.",
            "We accept no liability for any loss or cost arising from reliance on inaccurate location data.",
          ],
        },
      ],
    },
    {
      id: "jobs",
      heading: "8. Job listings",
      blocks: [
        {
          type: "ul",
          items: [
            "Job listings are published by business owners at their own responsibility; we do not verify their accuracy or seriousness.",
            "Applying, negotiating, and hiring happen directly between the applicant and the employer, outside our responsibility.",
            "Requesting money from applicants in exchange for employment is prohibited, and we will remove any listing that does so.",
          ],
        },
      ],
    },
    {
      id: "termination",
      heading: "9. Suspension and termination",
      blocks: [
        {
          type: "ul",
          items: [
            "You may stop using the service at any time by deleting your account.",
            "We may suspend or terminate any account that violates these terms or threatens the safety of users or the platform.",
            "In cases of serious violation, suspension may be immediate and without prior notice.",
            "Termination does not extinguish financial obligations that existed before it.",
          ],
        },
      ],
    },
    {
      id: "disclaimer",
      heading: "10. Disclaimer and limitation of liability",
      blocks: [
        {
          type: "p",
          text: "The service is provided “as is” and “as available” without warranties of any kind, express or implied.",
        },
        {
          type: "ul",
          items: [
            "We do not warrant that the app will be available uninterrupted or free of errors.",
            "We are not responsible for the quality of products or services provided by business owners.",
            "We are not liable for indirect, consequential, or lost-profit damages.",
            "In all cases our total liability is limited to the amounts you paid us in the twelve months preceding the event, if any.",
          ],
        },
      ],
    },
    {
      id: "changes-law",
      heading: "11. Changes and governing law",
      blocks: [
        {
          type: "p",
          text: "We may amend these terms from time to time and will announce material changes inside the app. Continuing to use the service after an amendment means you accept it. These terms are governed by the laws of the country in which the service operator is established, and its courts have jurisdiction over any dispute arising from them.",
        },
      ],
    },
    {
      id: "contact",
      heading: "12. Contact us",
      blocks: [
        {
          type: "p",
          text: "For any question about these terms or about your rights and obligations, get in touch.",
        },
      ],
    },
  ],
};

/* ════════════════════════════════════════════════════════════════════
   ACCOUNT & DATA DELETION
   ════════════════════════════════════════════════════════════════════ */

const deletionAr: LegalDocument = {
  slug: "account-deletion",
  title: "حذف الحساب والبيانات",
  intro:
    "حسابك ملكك، ولك أن تحذفه متى شئت. توضح هذه الصفحة كيف تطلب حذف حسابك في تراك مي، وما الذي يُحذف فعليًا، وما الذي نضطر للاحتفاظ به ولماذا.",
  sections: [
    {
      id: "request",
      heading: "1. كيف تطلب حذف حسابك",
      blocks: [
        {
          type: "p",
          text: "أرسل طلب الحذف من البريد الإلكتروني المسجّل في حسابك، وسنؤكد استلامه ثم ننفّذه.",
        },
        {
          type: "steps",
          items: [
            "افتح بريدك الإلكتروني — لا بد أن يكون نفس البريد المسجّل في التطبيق حتى نتحقق من هويتك.",
            "أرسل رسالة إلى بريد الدعم الموضّح أسفل هذه الصفحة، واجعل عنوانها: «طلب حذف حساب».",
            "اذكر في الرسالة رقم الهاتف المسجّل في حسابك، دون أي كلمات مرور.",
            "سنرد عليك خلال ثلاثة أيام عمل لتأكيد الطلب، ثم ننفّذ الحذف خلال ثلاثين يومًا كحد أقصى.",
          ],
        },
        {
          type: "note",
          text: "لن نطلب منك أبدًا كلمة المرور أو بيانات بطاقتك البنكية في أي مراسلة. أي رسالة تطلب ذلك ليست منا.",
        },
      ],
    },
    {
      id: "before",
      heading: "2. قبل أن تحذف",
      blocks: [
        {
          type: "p",
          text: "الحذف نهائي ولا يمكن التراجع عنه بعد انقضاء مهلة السماح. راجع النقاط التالية أولاً:",
        },
        {
          type: "ul",
          items: [
            "أنهِ أي طلبات جارية أو معلّقة، سواء كطالب أو كمنفّذ.",
            "سوِّ أي مستحقات مالية قائمة بينك وبين الطرف الآخر.",
            "إن كنت صاحب نشاط، فحذف حسابك يعني إزالة عرباتك ومنتجاتك وإعلانات وظائفك من التطبيق.",
            "احتفظ بأي فواتير أو سجلات تحتاجها قبل تقديم الطلب.",
          ],
        },
      ],
    },
    {
      id: "grace-period",
      heading: "3. مهلة السماح",
      blocks: [
        {
          type: "p",
          text: "بعد تأكيد طلبك، يُعطّل حسابك فورًا ويختفي من التطبيق، لكن البيانات تظل قابلة للاسترجاع لمدة أربعة عشر يومًا. إن غيّرت رأيك خلال هذه المهلة، راسلنا من نفس البريد وسنُلغي الطلب. بعد انقضائها يبدأ الحذف النهائي ولا يمكن التراجع.",
        },
      ],
    },
    {
      id: "what-deleted",
      heading: "4. ما الذي يُحذف",
      blocks: [
        {
          type: "ul",
          items: [
            "ملفك الشخصي بالكامل: الاسم، البريد، رقم الهاتف، الصورة الشخصية، المدينة والدولة.",
            "بيانات الدخول ورموز الجلسة وربط حسابك بـ Google أو Apple.",
            "عرباتك ومنتجاتك وقوائمك وساعات عملك وصورها إن كنت صاحب نشاط.",
            "منشوراتك في المجتمع، وتقييماتك ومراجعاتك، وإعلانات الوظائف وطلبات التقديم الخاصة بك.",
            "محادثاتك ورسائلك، وقوائم المحفوظات والمفضلة.",
            "رمز الإشعارات الخاص بجهازك، فتتوقف كل الإشعارات فورًا.",
            "آخر موقع معروف مرتبط بحسابك.",
          ],
        },
      ],
    },
    {
      id: "what-kept",
      heading: "5. ما الذي نحتفظ به ولماذا",
      blocks: [
        {
          type: "p",
          text: "هناك بيانات محدودة لا نستطيع حذفها فورًا لأسباب نظامية أو لحماية الطرف الآخر:",
        },
        {
          type: "ul",
          items: [
            "سجلات المعاملات المالية والفواتير: للمدة التي تفرضها الأنظمة المحاسبية والضريبية، بعد فصلها عن هويتك حيثما أمكن.",
            "سجلات الطلبات المكتملة من جهة الطرف الآخر: تبقى لديه بصفتها جزءًا من سجل أعماله، دون بياناتك الشخصية.",
            "سجلات مكافحة الاحتيال وإساءة الاستخدام: لمدة محدودة تمنع إعادة إنشاء حساب لتجاوز حظر سابق.",
            "بيانات مُجمّعة ومجهولة الهوية لا يمكن ربطها بك بأي حال، وتُستخدم للإحصاءات فقط.",
          ],
        },
      ],
    },
    {
      id: "partial",
      heading: "6. بدائل الحذف الكامل",
      blocks: [
        {
          type: "p",
          text: "إن كان ما يزعجك جزءًا محددًا فقط، فلست مضطرًا لحذف الحساب كله:",
        },
        {
          type: "ul",
          items: [
            "أوقف بث موقعك من داخل التطبيق دون التأثير على باقي حسابك.",
            "اسحب إذن الموقع أو الإشعارات من إعدادات جهازك.",
            "احذف منشورًا أو تقييمًا أو إعلان وظيفة بشكل فردي.",
            "عدّل بياناتك الشخصية أو صورتك من شاشة الملف الشخصي.",
            "راسلنا لطلب نسخة من بياناتك بدلاً من حذفها.",
          ],
        },
      ],
    },
    {
      id: "contact",
      heading: "7. التواصل معنا",
      blocks: [
        {
          type: "p",
          text: "لأي سؤال عن حذف حسابك أو بياناتك، أو لمتابعة طلب قدّمته سابقًا، تواصل معنا.",
        },
      ],
    },
  ],
};

const deletionEn: LegalDocument = {
  slug: "account-deletion",
  title: "Account & Data Deletion",
  intro:
    "Your account is yours, and you can delete it whenever you want. This page explains how to request deletion of your Track Me account, what is actually erased, and what we are obliged to keep and why.",
  sections: [
    {
      id: "request",
      heading: "1. How to request deletion",
      blocks: [
        {
          type: "p",
          text: "Send the deletion request from the email address registered on your account; we will confirm receipt and then carry it out.",
        },
        {
          type: "steps",
          items: [
            "Open your email — it must be the same address registered in the app so we can verify your identity.",
            "Write to the support address shown at the bottom of this page with the subject: “Account deletion request”.",
            "Include the phone number registered on your account. Never include any passwords.",
            "We will reply within three business days to confirm the request, then complete deletion within thirty days at the latest.",
          ],
        },
        {
          type: "note",
          text: "We will never ask you for your password or bank card details in any correspondence. Any message that does is not from us.",
        },
      ],
    },
    {
      id: "before",
      heading: "2. Before you delete",
      blocks: [
        {
          type: "p",
          text: "Deletion is permanent and cannot be undone once the grace period ends. Check the following first:",
        },
        {
          type: "ul",
          items: [
            "Close out any ongoing or pending orders, whether you placed them or are fulfilling them.",
            "Settle any outstanding balance between you and the other party.",
            "If you are a business owner, deleting your account removes your trucks, products, and job listings from the app.",
            "Save any invoices or records you need before submitting the request.",
          ],
        },
      ],
    },
    {
      id: "grace-period",
      heading: "3. Grace period",
      blocks: [
        {
          type: "p",
          text: "After your request is confirmed, your account is disabled immediately and disappears from the app, but the data remains recoverable for fourteen days. If you change your mind within that window, write to us from the same address and we will cancel the request. After it expires, permanent deletion begins and cannot be reversed.",
        },
      ],
    },
    {
      id: "what-deleted",
      heading: "4. What gets deleted",
      blocks: [
        {
          type: "ul",
          items: [
            "Your entire profile: name, email, phone number, profile photo, city and country.",
            "Login credentials, session tokens, and any link between your account and Google or Apple.",
            "Your trucks, products, menus, working hours, and their photos if you are a business owner.",
            "Your community posts, ratings and reviews, job listings, and applications.",
            "Your chats and messages, and your saved and favourite lists.",
            "Your device's notification token, so all notifications stop immediately.",
            "The last known location associated with your account.",
          ],
        },
      ],
    },
    {
      id: "what-kept",
      heading: "5. What we keep, and why",
      blocks: [
        {
          type: "p",
          text: "A limited set of data cannot be deleted immediately for regulatory reasons or to protect the other party:",
        },
        {
          type: "ul",
          items: [
            "Financial transaction records and invoices: for the period accounting and tax rules require, decoupled from your identity where possible.",
            "Completed order records on the other party's side: these remain part of their business records, without your personal data.",
            "Anti-fraud and abuse records: for a limited period, to prevent an account being recreated to evade an earlier ban.",
            "Aggregated, anonymised data that cannot be linked back to you in any way, used for statistics only.",
          ],
        },
      ],
    },
    {
      id: "partial",
      heading: "6. Alternatives to full deletion",
      blocks: [
        {
          type: "p",
          text: "If only one specific thing is bothering you, you do not have to delete the whole account:",
        },
        {
          type: "ul",
          items: [
            "Stop broadcasting your location from inside the app without affecting the rest of your account.",
            "Revoke the location or notification permission from your device settings.",
            "Delete an individual post, review, or job listing.",
            "Edit your personal details or photo from the profile screen.",
            "Write to us to request a copy of your data instead of deleting it.",
          ],
        },
      ],
    },
    {
      id: "contact",
      heading: "7. Contact us",
      blocks: [
        {
          type: "p",
          text: "For any question about deleting your account or data, or to follow up on a request you already submitted, get in touch.",
        },
      ],
    },
  ],
};

/* ════════════════════════════════════════════════════════════════════
   REGISTRY
   ════════════════════════════════════════════════════════════════════ */

const DOCS: Record<Lang, Record<DocSlug, LegalDocument>> = {
  ar: { privacy: privacyAr, terms: termsAr, "account-deletion": deletionAr },
  en: { privacy: privacyEn, terms: termsEn, "account-deletion": deletionEn },
};

export const getDoc = (lang: Lang, slug: DocSlug): LegalDocument =>
  DOCS[lang][slug];

/** Which email each document points visitors to for follow-up. */
export const DOC_CONTACT: Record<
  DocSlug,
  "privacyEmail" | "legalEmail" | "supportEmail"
> = {
  privacy: "privacyEmail",
  terms: "legalEmail",
  "account-deletion": "supportEmail",
};
