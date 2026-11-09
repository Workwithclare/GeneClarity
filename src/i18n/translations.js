/**
 * GeneClarity bilingual string catalogue.
 *
 * Both languages live side by side in one file so it is obvious to a
 * reviewer that every user-facing string is translated. Keys are flat
 * and grouped by screen prefix (e.g. `dash.` = dashboard).
 *
 * Arabic text was written for this project and follows the same
 * plain-language register as the English copy.
 */

export const en = {
  // --- Brand -------------------------------------------------------
  'brand.tagline': 'Understanding and Reducing Inherited Disease Risk.',
  'brand.promise1': 'Know more.',
  'brand.promise2': 'Plan better.',
  'brand.promiseSub': 'Get clear, simple insights about your genetic health.',
  'brand.line': 'GENETICS · UNDERSTANDING · CHOICE',

  // --- Generic actions --------------------------------------------
  'act.getStarted': 'Get Started',
  'act.signIn': 'Sign In',
  'act.signUp': 'Sign Up',
  'act.signOut': 'Log Out',
  'act.next': 'Next',
  'act.back': 'Back',
  'act.continue': 'Continue',
  'act.cancel': 'Cancel',
  'act.save': 'Save',
  'act.close': 'Close',
  'act.learnMore': 'Learn More',
  'act.viewReport': 'View Report',
  'act.downloadPdf': 'Download PDF',
  'act.getSupport': 'Get Support',
  'act.goToDashboard': 'Go to Dashboard',
  'act.tryAgain': 'Try Again',
  'act.skip': 'Skip',

  // --- Splash ------------------------------------------------------
  'splash.loading': 'Loading…',
  'splash.notice': 'Demonstration prototype',

  // --- Onboarding ---------------------------------------------------
  'onb.whatTitle': 'What is GeneClarity?',
  'onb.whatBody':
    'GeneClarity helps you understand your genetic information in a simple, responsible way.',
  'onb.f1': 'Learn about potential inherited risks',
  'onb.f2': 'Get trusted health information',
  'onb.f3': 'Know your options',
  'onb.step': 'Step',
  'onb.of': 'of',
  'onb.privacyTitle': 'Your information stays yours',
  'onb.privacyBody':
    'Your records are private by default. Nothing reaches a partner unless you explicitly allow it — and you can withdraw that at any time.',
  'onb.p1': 'Separate private accounts',
  'onb.p2': 'Consent required to share',
  'onb.p3': 'Revoke access any time',
  'onb.safetyTitle': 'Guidance, not a diagnosis',
  'onb.safetyBody':
    'GeneClarity explains screening information in plain language. It does not diagnose, prescribe, or tell you what to decide.',
  'onb.s1': 'Plain-language explanations',
  'onb.s2': 'Uncertainty shown honestly',
  'onb.s3': 'Leads to real counsellors',

  // --- Consent ------------------------------------------------------
  'consent.title': 'Privacy & Consent',
  'consent.lead':
    'Before you continue, please confirm how your information may be used.',
  'consent.c1t': 'Your results stay private',
  'consent.c1b':
    'Screening information belongs to your account alone. Nobody sees it unless you choose to share it.',
  'consent.c2t': 'Sharing is always your choice',
  'consent.c2b':
    'A partner can never open your records automatically. You grant access explicitly, and you can withdraw it at any time.',
  'consent.c3t': 'This is not a diagnosis',
  'consent.c3b':
    'GeneClarity explains educational information. It does not diagnose conditions, prescribe treatment, or replace a doctor or genetic counsellor.',
  'consent.c4t': 'Demonstration data only',
  'consent.c4b':
    'This prototype uses original, clearly labelled sample records. No real patient data is used.',
  'consent.agree': 'I have read and I agree',
  'consent.decline': 'Decline and exit',
  'consent.required': 'Please tick the box to continue.',
  'consent.declinedTitle': 'You chose not to continue',
  'consent.declinedBody':
    'That is a completely reasonable choice. Nothing has been saved, and you can come back whenever you are ready.',

  // --- Auth ----------------------------------------------------------
  'auth.welcomeBack': 'Welcome Back',
  'auth.signInToContinue': 'Sign in to continue',
  'auth.email': 'Email address',
  'auth.password': 'Password',
  'auth.confirmPassword': 'Confirm password',
  'auth.fullName': 'Full name',
  'auth.remember': 'Remember me',
  'auth.forgot': 'Forgot password?',
  'auth.or': 'or',
  'auth.continueGoogle': 'Continue with Google',
  'auth.continueApple': 'Continue with Apple',
  'auth.socialDemo': 'Social sign-in is not connected in this prototype - the buttons are shown for design only.',
  'auth.createTitle': 'Create Account',
  'auth.createSub': 'Join GeneClarity today',
  'auth.noAccount': "Don't have an account?",
  'auth.hasAccount': 'Already have an account?',
  'auth.terms': 'I agree to the Terms & Privacy Policy',
  'auth.demoBody':
    'No real account is created. Use any details to explore the prototype, or load the sample account below.',
  'auth.demoFill': 'Use sample account',
  'auth.errEmail': 'Please enter your email address.',
  'auth.errEmailShape': 'That does not look like an email address.',
  'auth.errPassword': 'Please enter your password.',
  'auth.errPasswordShort': 'Password must be at least 6 characters.',
  'auth.errName': 'Please enter your name.',
  'auth.errMatch': 'Passwords do not match.',
  'auth.errTerms': 'Please accept the terms to continue.',
  'auth.show': 'Show password',
  'auth.hide': 'Hide password',

  // --- Dashboard -----------------------------------------------------
  'dash.hello': 'Hello,',
  'dash.companion': 'Your genetic health companion',
  'dash.journey': 'Your Health Journey',
  'dash.journeySub': 'Explore your insights and get personalised guidance.',
  'dash.quickAccess': 'Quick Access',
  'dash.myReport': 'My Report',
  'dash.healthTips': 'Health Tips',
  'dash.faqs': 'FAQs',
  'dash.settings': 'Settings',
  'dash.home': 'Home',
  'dash.report': 'Report',
  'dash.tips': 'Tips',
  'dash.profile': 'Profile',
  'dash.coupleCard': 'CoupleConnect',
  'dash.coupleSub': 'Explore compatibility information together, with consent.',

  // --- Report ---------------------------------------------------------
  'rep.title': 'Your Genetic Report',
  'rep.allSet': 'All set!',
  'rep.ready': 'Your report is ready.',
  'rep.note':
    'Note: This is an educational summary, not a medical diagnosis.',
  'rep.sampleTag': 'SAMPLE DATA',
  'rep.none': 'No report has been added yet.',
  'rep.summary': 'Summary',
  'rep.carrierCount': 'Carrier findings',
  'rep.testedCount': 'Conditions screened',
  'rep.updated': 'Last updated',
  'rep.disclaimer':
    'These figures describe a demonstration record created for this prototype. They are not clinical findings.',

  // --- Result detail ---------------------------------------------------
  'res.keyInsights': 'Key Insights',
  'res.carrierStatus': 'Carrier Status',
  'res.whatThisMeans': 'What This Means',
  'res.notCarried': 'Not a detected carrier',
  'res.uncertain': 'Variant of uncertain significance',
  'res.plainTitle': 'In plain language',
  'res.forCouple': 'What this means for a couple',
  'res.uncertainTitle': 'About uncertainty',
  'res.uncertainBody':
    'Some findings are unclear. "Uncertain" means the information is not understood well enough to draw a conclusion — it does not mean something is wrong.',
  'res.nextSteps': 'Suggested next steps',
  'res.step1': 'Read the plain-language explanation on this page.',
  'res.step2': 'Bring these results to your doctor or a genetic counsellor.',
  'res.step3': 'Avoid making health decisions from this screen alone.',
  'res.safety': 'GeneClarity explains information. It does not diagnose.',
  'res.glossary': 'Words used on this page',
  'res.gCarrier': 'Carrier',
  'res.gCarrierDef':
    'A person who carries one changed copy of a gene without usually being affected by the condition themselves.',
  'res.gRecessive': 'Recessive condition',
  'res.gRecessiveDef':
    'A condition that usually only appears when a person inherits two changed copies of the same gene.',
  'res.gVariant': 'Variant',
  'res.gVariantDef':
    'A difference in a DNA sequence. Some have no effect, some matter for health.',

  // --- Learn / education ------------------------------------------------
  'learn.title': 'Learn',
  'learn.subtitle': 'Clear explanations of inherited conditions and screening words.',
  'learn.search': 'Search topics…',
  'learn.all': 'All',
  'learn.basics': 'The basics',
  'learn.conditions': 'Conditions',
  'learn.counselling': 'Counselling',
  'learn.readTime': 'min read',
  'learn.empty': 'No topics match that search.',
  'learn.educationOnly':
    'Educational content only. It is general information, not advice about your own health.',
  'learn.related': 'Related topics',
  'learn.whyMatters': 'Why this matters',
  'learn.whatYouCanDo': 'What you can do',

  // --- FAQ -------------------------------------------------------------
  'faq.title': 'Frequently Asked Questions',
  'faq.search': 'Search FAQs…',
  'faq.noResults': 'No FAQs match your search.',
  'faq.safety': 'Answers are general education, not advice about your own health.',
  'faq.helpTitle': 'Need more help?',
  'faq.helpBody': 'Talk to a genetic counsellor.',
  'faq.q1': 'What is a carrier?',
  'faq.a1':
    'A carrier has one changed copy of a gene. Most carriers are healthy and never know they carry it. Two carriers having a child together is when a recessive condition can become relevant.',
  'faq.q2': 'What are the risks?',
  'faq.a2':
    'Risk depends on both partners’ results and on the specific condition. It is expressed as a range or a fraction, never as a certainty. A genetic counsellor can walk you through the numbers for your own situation.',
  'faq.q3': 'Can I pass this to my child?',
  'faq.a3':
    'Potentially, and that is exactly what screening is meant to inform. The pattern depends on both parents. This is a question for a qualified counsellor who can see both records.',
  'faq.q4': 'Should I see a doctor?',
  'faq.a4':
    'If a result concerns you, yes. GeneClarity is designed to help you prepare for that conversation, not to replace it.',

  // --- CoupleConnect ------------------------------------------------------
  'cc.title': 'CoupleConnect',
  'cc.lead':
    'Explore what your combined screening information can mean — only with full consent from both people.',
  'cc.noPartner': 'No partner connected',
  'cc.noPartnerBody':
    'Partner access starts with an explicit invitation. Nothing is shared until both of you agree.',
  'cc.invite': 'Invite a partner',
  'cc.inviteBody':
    'Send an invitation code. Your partner must accept before anything is visible to them.',
  'cc.yourConsent': 'Your sharing consent',
  'cc.manageConsent': 'Manage what I share',
  'cc.statusNone': 'Nothing shared',
  'cc.statusPending': 'Invitation pending',
  'cc.statusActive': 'Sharing active',
  'cc.statusRevoked': 'Access revoked',
  'cc.revoke': 'Revoke future access',
  'cc.revokeConfirm':
    'Your partner will immediately lose access to anything shared. They keep their own account.',
  'cc.whatPartnerSees': 'What my partner would see',
  'cc.seesConsent': 'Only the categories you switch on. Nothing else.',
  'cc.seesNoChart': 'Your full report is never shown by default.',
  'cc.ruleTitle': 'How sharing works',
  'cc.rule1': 'Both people hold separate private accounts.',
  'cc.rule2': 'Nothing is shared until both sides consent.',
  'cc.rule3': 'Either person can withdraw consent at any time.',
  'cc.rule4': 'Withdrawal stops future access; it does not erase history already lawfully viewed.',
  'cc.bothConsent': 'Both partners must consent before anything is shared.',
  'cc.demoPartner': 'Demo partner',
  'cc.combinedTitle': 'Combined view',
  'cc.combinedBody':
    'Where both records are shared, GeneClarity can show overlapping carrier status. This is educational information for discussion with a counsellor — not a compatibility verdict.',
  'cc.never': 'GeneClarity does not tell anyone whether to marry or have children.',

  // --- Partner consent ------------------------------------------------------
  'pc.title': 'Partner Sharing Consent',
  'pc.lead': 'You decide exactly what your partner can see.',
  'pc.scope': 'Choose what to share',
  'pc.optSummary': 'Shared carrier summary',
  'pc.optSummaryBody': 'Your plain-language carrier findings only.',
  'pc.optFull': 'Full report access',
  'pc.optFullBody': 'Lets your partner open your complete report.',
  'pc.optActivity': 'Activity notifications',
  'pc.optActivityBody': 'Tell them when you add a new result.',
  'pc.grant': 'Grant access',
  'pc.revoke': 'Revoke access',
  'pc.none': 'Nothing is shared right now.',
  'pc.expires': 'Consent recorded',
  'pc.revokeWarning':
    'Revoking stops future access immediately. It does not remove anything already seen.',
  'pc.saved': 'Your consent choices have been saved.',
  'pc.withdrawTitle': 'Withdraw consent',
  'pc.withdrawBody':
    'You can stop sharing at any time, for any reason, without giving one.',

  // --- Support / counselling ------------------------------------------------
  'sup.title': 'Genetic Counselling',
  'sup.helpSub': "We're here to help you.",
  'sup.lead':
    'Talk to a qualified professional about what your results mean for you.',
  'sup.whyTitle': 'When counselling helps',
  'sup.why1': 'You want the numbers explained for your own situation.',
  'sup.why2': 'You and your partner have results you would like to read together.',
  'sup.why3': 'A result has left you worried or unsure what to do next.',
  'sup.book': 'Request a call',
  'sup.message': 'Send a Message',
  'sup.faq': 'FAQs',
  'sup.contact': 'Contact Us',
  'sup.liveChat': 'Live Chat',
  'sup.available': 'Available 24/7',
  'sup.demoNote':
    'Demonstration only — no real appointment is booked and no message is sent from this prototype.',
  'sup.directoryTitle': 'Counsellor directory',
  'sup.directoryNote':
    'Illustrative entries for layout purposes. Not a real directory or referral service.',
  'sup.emergency':
    'If you feel unwell or are worried about an urgent health problem, contact your doctor or local emergency service. GeneClarity is not an emergency service.',

  // --- Profile ------------------------------------------------------------
  'prof.title': 'Profile',
  'prof.myReports': 'My Reports',
  'prof.familyAccess': 'Family Access',
  'prof.privacySettings': 'Privacy Settings',
  'prof.about': 'About GeneClarity',
  'prof.notifications': 'Notifications',
  'prof.activity': 'Activity History',
  'prof.memberSince': 'Member since',

  // --- Settings ------------------------------------------------------------
  'set.title': 'Settings',
  'set.language': 'Language',
  'set.notifications': 'Notifications',
  'set.privacySecurity': 'Privacy & Security',
  'set.dataSharing': 'Data Sharing',
  'set.aboutApp': 'About App',
  'set.helpSupport': 'Help & Support',

  // --- Privacy settings ------------------------------------------------------
  'priv.title': 'Privacy & Security',
  'priv.lead': 'Control how your information is handled.',
  'priv.profileVisibility': 'Profile visibility',
  'priv.profileVisibilitySub': 'Only you can see your profile details.',
  'priv.shareResearch': 'Contribute anonymised data',
  'priv.shareResearchSub':
    'Off by default. No data leaves this prototype in any case.',
  'priv.autoLock': 'Auto-lock app',
  'priv.autoLockSub': 'Ask for sign-in again after 15 minutes of inactivity.',
  'priv.export': 'Export my data',
  'priv.exportSub': 'Download a copy of everything held about you.',
  'priv.erase': 'Delete my account',
  'priv.eraseSub': 'Permanently remove your account and records.',
  'priv.eraseConfirm':
    'This demonstration does not store data on a server, so there is nothing to erase. In the live product this would be irreversible.',
  'priv.partnersTitle': 'Partner access',
  'priv.noPartner': 'No partner has access to your records.',
  'priv.manage': 'Manage sharing',
  'priv.logTitle': 'Privacy log',
  'priv.logNote': 'Every consent change is recorded here.',

  // --- Notifications ---------------------------------------------------------
  'notif.title': 'Notifications',
  'notif.empty': 'You are all caught up.',
  'notif.markRead': 'Mark all as read',
  'notif.markOne': 'Mark read',
  'notif.unread': 'Unread',
  'notif.allRead': 'All notifications marked as read.',

  // --- Activity -----------------------------------------------------------------
  'act2.title': 'Activity History',
  'act2.lead': 'A record of what happened in your account.',
  'act2.empty': 'No activity recorded yet.',
  'act2.signedIn': 'Signed in',
  'act2.consentGranted': 'Partner access granted',
  'act2.consentRevoked': 'Partner access revoked',
  'act2.reportViewed': 'Report viewed',
  'act2.settingsChanged': 'Settings changed',
  'act2.languageChanged': 'Language changed',
  'act2.note': 'Activity stays on this device only.',

  // --- Support page / help -----------------------------------------------------

  // --- Success / completion ------------------------------------------------------
  'done.title': "You're all set!",
  'done.body': 'Thank you for choosing GeneClarity. Your health journey matters.',

  // --- Shared notices -------------------------------------------------------------
  'nav.demo': 'Prototype',
  'notice.sampleHeading': 'Demonstration data',
  'notice.sampleBody':
    'Every result, name and number in this prototype is an original example created for demonstration. Nothing here is a real screening result.',
  'notice.notDiagnostic': 'Not a diagnosis',
  'notice.backHome': 'Back to start',

  // --- Errors --------------------------------------------------------------------
  'err.title': 'This screen could not be found.',
  'err.body': 'The page you asked for does not exist in this prototype.',
}

/**
 * Arabic catalogue. Keys mirror `en` exactly; a missing key would be
 * visible immediately in the UI, so the parity check in docs/07 lists
 * this file as the single source of truth for both languages.
 */
export const ar = {
  'brand.tagline': 'ال理解和تقليل مخاطر الأمراض الوراثية.',
  'brand.promise1': 'اعرف المزيد.',
  'brand.promise2': 'خطّط بشكل أفضل.',
  'brand.promiseSub': 'احصل على رؤى واضحة وبسيطة عن صحتك الوراثية.',
  'brand.line': 'الوراثة · الفهم · الخيار',

  'act.getStarted': 'ابدأ الآن',
  'act.signIn': 'تسجيل الدخول',
  'act.signUp': 'إنشاء حساب',
  'act.signOut': 'تسجيل الخروج',
  'act.next': 'التالي',
  'act.back': 'رجوع',
  'act.continue': 'متابعة',
  'act.cancel': 'إلغاء',
  'act.save': 'حفظ',
  'act.close': 'إغلاق',
  'act.learnMore': 'اعرف المزيد',
  'act.viewReport': 'عرض التقرير',
  'act.downloadPdf': 'تنزيل PDF',
  'act.getSupport': 'احصل على الدعم',
  'act.goToDashboard': 'الانتقال إلى اللوحة',
  'act.tryAgain': 'حاول مرة أخرى',
  'act.skip': 'تخطي',

  'splash.loading': 'جارٍ التحميل…',
  'splash.notice': 'نموذج تجريبي',

  'onb.whatTitle': 'ما هو جين كلايري؟',
  'onb.whatBody':
    'يساعدك جين كلايري على فهم معلوماتك الوراثية بطريقة بسيطة ومسؤولة.',
  'onb.f1': 'اعرف المخاطر الوراثية المحتملة',
  'onb.f2': 'احصل على معلومات صحية موثوقة',
  'onb.f3': 'اعرف خياراتك',
  'onb.step': 'الخطوة',
  'onb.of': 'من',
  'onb.privacyTitle': 'معلوماتك تبقى لك',
  'onb.privacyBody':
    'سجلاتك خاصة افتراضيًا. لا تصل إلى أي شريك إلا بموافقتك الصريحة — ويمكنك سحبها في أي وقت.',
  'onb.p1': 'حسابات خاصة منفصلة',
  'onb.p2': 'المشاركة تتطلب موافقة',
  'onb.p3': 'سحب الوصول في أي وقت',
  'onb.safetyTitle': 'إرشاد لا تشخيص',
  'onb.safetyBody':
    'يفسر جين كلايري معلومات الفحص بلغة بسيطة. لا يشخّص ولا يصف علاجًا ولا يخبرك بما تقرر.',
  'onb.s1': 'شروحات بلغة بسيطة',
  'onb.s2': 'عرض الغموض بصدق',
  'onb.s3': 'يوصلك بمرشدين حقيقيين',

  'consent.title': 'الخصوصية والموافقة',
  'consent.lead': 'يرجى تأكيد كيفية استخدام معلوماتك قبل المتابعة.',
  'consent.c1t': 'نتائجك تبقى خاصة',
  'consent.c1b':
    'معلومات الفحص مخصصة لحسابك وحدك. لا يراها أحد إلا إذا اخترت مشاركتها.',
  'consent.c2t': 'المشاركة اختيارك دائمًا',
  'consent.c2b':
    'لا يستطيع أي شريك فتح سجلاتك تلقائيًا. أنت تمنح الوصول بوضوح ويمكنك سحبه في أي وقت.',
  'consent.c3t': 'هذا ليس تشخيصًا',
  'consent.c3b':
    'يفسر جين كلايري معلومات تعليمية. لا يشخّص الأمراض ولا يصف العلاج ولا يحل محل الطبيب أو المرشد الوراثي.',
  'consent.c4t': 'بيانات توضيحية فقط',
  'consent.c4b':
    'يستخدم هذا النموذج سجلات أصلية موضحة بوضوح. لا توجد أي بيانات مريض حقيقية.',
  'consent.agree': 'قرأت وأوافق',
  'consent.decline': 'رفض والمغادرة',
  'consent.required': 'يرجى تحديد المربع للمتابعة.',
  'consent.declinedTitle': 'اخترت عدم المتابعة',
  'consent.declinedBody':
    'هذا خيار معقول تمامًا. لم يتم حفظ أي شيء، ويمكنك العودة متى كنت مستعدًا.',

  'auth.welcomeBack': 'مرحبًا بعودتك',
  'auth.signInToContinue': 'سجّل الدخول للمتابعة',
  'auth.email': 'البريد الإلكتروني',
  'auth.password': 'كلمة المرور',
  'auth.confirmPassword': 'تأكيد كلمة المرور',
  'auth.fullName': 'الاسم الكامل',
  'auth.remember': 'تذكرني',
  'auth.forgot': 'نسيت كلمة المرور؟',
  'auth.or': 'أو',
  'auth.continueGoogle': 'المتابعة عبر Google',
  'auth.continueApple': 'المتابعة عبر Apple',
  'auth.socialDemo': 'تسجيل الدخول عبر الحسابات الاجتماعية غير مفعّل في هذا النموذج - الأزرار معروضة للتصميم فقط.',
  'auth.createTitle': 'إنشاء حساب',
  'auth.createSub': 'انضم إلى جين كلايري اليوم',
  'auth.noAccount': 'ليس لديك حساب؟',
  'auth.hasAccount': 'لديك حساب بالفعل؟',
  'auth.terms': 'أوافق على الشروط وسياسة الخصوصية',
  'auth.demoBody':
    'لا يتم إنشاء حساب حقيقي. استخدم أي بيانات لاستكشاف النموذج، أو حمّل الحساب التجريبي أدناه.',
  'auth.demoFill': 'استخدام حساب تجريبي',
  'auth.errEmail': 'يرجى إدخال بريدك الإلكتروني.',
  'auth.errEmailShape': 'هذا لا يبدو بريدًا إلكترونيًا صحيحًا.',
  'auth.errPassword': 'يرجى إدخال كلمة المرور.',
  'auth.errPasswordShort': 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.',
  'auth.errName': 'يرجى إدخال اسمك.',
  'auth.errMatch': 'كلمتا المرور غير متطابقتين.',
  'auth.errTerms': 'يرجى قبول الشروط للمتابعة.',
  'auth.show': 'إظهار كلمة المرور',
  'auth.hide': 'إخفاء كلمة المرور',

  'dash.hello': 'مرحبًا،',
  'dash.companion': 'رفيقك في الصحة الوراثية',
  'dash.journey': 'رحلتك الصحية',
  'dash.journeySub': 'استكشف رؤيك واحصل على إرشاد مخصص.',
  'dash.quickAccess': 'وصول سريع',
  'dash.myReport': 'تقاريري',
  'dash.healthTips': 'نصائح صحية',
  'dash.faqs': 'الأسئلة الشائعة',
  'dash.settings': 'الإعدادات',
  'dash.home': 'الرئيسية',
  'dash.report': 'التقرير',
  'dash.tips': 'نصائح',
  'dash.profile': 'الملف',
  'dash.coupleCard': 'ربط الزوجين',
  'dash.coupleSub': 'استكشف معلومات التوافق معًا وبموافقة كاملة.',

  'rep.title': 'تقريرك الوراثي',
  'rep.allSet': 'كل شيء جاهز!',
  'rep.ready': 'تقريرك جاهز.',
  'rep.note': 'ملاحظة: هذا ملخص تعليمي وليس تشخيصًا طبيًا.',
  'rep.sampleTag': 'بيانات توضيحية',
  'rep.none': 'لم تتم إضافة تقرير بعد.',
  'rep.summary': 'الملخص',
  'rep.carrierCount': 'نتائج الحامل',
  'rep.testedCount': 'الأمراض المفحوصة',
  'rep.updated': 'آخر تحديث',
  'rep.disclaimer':
    'تصف هذه الأرقام سجلًا توضيبيًا أُنشئ لهذا النموذج. ليست نتائج سريرية.',

  'res.keyInsights': 'أبرز النقاط',
  'res.carrierStatus': 'حالة الحامل',
  'res.whatThisMeans': 'ماذا يعني هذا',
  'res.notCarried': 'ليست حاملاً',
  'res.uncertain': 'تغير غير مؤكد',
  'res.plainTitle': 'بلغة بسيطة',
  'res.forCouple': 'ماذا يعني هذا لزوجين',
  'res.uncertainTitle': 'بخصوص الغموض',
  'res.uncertainBody':
    'بعض النتائج غير واضحة. «غير مؤكد» يعني أن المعلومات غير كافية لاستنتاج خلاصة — ولا يعني أن هناك خطبًا.',
  'res.nextSteps': 'خطوات مقترحة',
  'res.step1': 'اقرأ الشرح البسيط في هذه الصفحة.',
  'res.step2': 'خذ هذه النتائج إلى طبيبك أو إلى مرشد وراثي.',
  'res.step3': 'تجنّب اتخاذ قرارات صحية بناءً على هذه الشاشة وحدها.',
  'res.safety': 'يفسر جين كلايري المعلومات. لا يشخّص المرض.',
  'res.glossary': 'المصطلحات في هذه الصفحة',
  'res.gCarrier': 'الحامل',
  'res.gCarrierDef':
    'شخص يحمل نسخة واحدة معدّلة من الجين ولا يتأثر عادةً بالمرض نفسه.',
  'res.gRecessive': 'مرض سائد بالتنحية',
  'res.gRecessiveDef':
    'مرض لا يظهر عادةً إلا عند وجود نسختين معدّلتين من الجين نفسه.',
  'res.gVariant': 'تغير جيني',
  'res.gVariantDef': 'اختلاف في تسلسل الحمض النووي. بعضها بلا أثر وبعضها مهم للصحة.',

  'learn.title': 'تعلّم',
  'learn.subtitle': 'شروحات واضحة عن الأمراض الوراثية وكلمات الفحص.',
  'learn.search': 'ابحث في المواضيع…',
  'learn.all': 'الكل',
  'learn.basics': 'الأساسيات',
  'learn.conditions': 'الأمراض',
  'learn.counselling': 'الإرشاد الوراثي',
  'learn.readTime': 'دقائق قراءة',
  'learn.empty': 'لا توجد مواضيع مطابقة.',
  'learn.educationOnly':
    'محتوى تعليمي فقط. معلومات عامة وليست نصيحة عن حالتك الصحية.',
  'learn.related': 'مواضيع ذات صلة',
  'learn.whyMatters': 'لماذا يهم هذا',
  'learn.whatYouCanDo': 'ما يمكنك فعله',

  'faq.title': 'الأسئلة الشائعة',
  'faq.search': 'ابحث في الأسئلة…',
  'faq.noResults': 'لا توجد أسئلة مطابقة لبحثك.',
  'faq.safety': 'الإجابات معلومات تعليمية عامة وليست نصيحة عن حالتك الصحية.',
  'faq.helpTitle': 'تحتاج مزيدًا من المساعدة؟',
  'faq.helpBody': 'تحدث مع مرشد وراثي مؤهل.',
  'faq.q1': 'من هو الحامل؟',
  'faq.a1':
    'الحامل هو من يملك نسخة واحدة معدّلة من الجين. معظم الأصحاء لا يدركون أنهم يحملونها. وعندما يجتمع حاملان يصبح المرض المتنحي ذا صلة.',
  'faq.q2': 'ما هي المخاطر؟',
  'faq.a2':
    'تعتمد المخاطر على نتائج كل من الشريكين وعلى المرض نفسه. تُعبَّر عنها كنطاق أو كسر، وليست أبدًا يقينًا. يمكن للمرشد الوراثي شرح الأرقام لحالتك.',
  'faq.q3': 'هل يمكنني نقل هذا إلى طفلي؟',
  'faq.a3':
    'محتمل، ولهذا وُجد الفحص. تعتمد الصورة على الوالدين، وهذا سؤال لمرشد مؤهل يرى السجلين معًا.',
  'faq.q4': 'هل يجب أن أرى طبيبًا؟',
  'faq.a4':
    'إذا أزعجك نتيجة، فنعم. صُمم جين كلايري لمساعدتك على الاستعداد لهذه المحادثة لا لاستبدالها.',

  'cc.title': 'ربط الزوجين',
  'cc.lead':
    'استكشف ما يمكن أن تعنيه معلومات الفحص المشتركة — بموافقة صريحة منكما معًا.',
  'cc.noPartner': 'لم يتم ربط شريك بعد',
  'cc.noPartnerBody':
    'يبدأ الوصول إلى الشريك بدعوة صريحة. لا تُشارك أي معلومات قبل موافقتكما.',
  'cc.invite': 'دعوة شريك',
  'cc.inviteBody': 'أرسل رمز دعوة. يجب على شريكك القبول قبل ظهور أي شيء له.',
  'cc.yourConsent': 'موافقتك على المشاركة',
  'cc.manageConsent': 'أدر ما أشاركه',
  'cc.statusNone': 'لا شيء مشترك',
  'cc.statusPending': 'دعوة معلقة',
  'cc.statusActive': 'المشاركة مفعّلة',
  'cc.statusRevoked': 'تم سحب الوصول',
  'cc.revoke': 'سحب الوصول المستقبلي',
  'cc.revokeConfirm':
    'سيفقد شريكك فورًا الوصول إلى أي شيء مشترك. يحتفظ بحسابه الخاص.',
  'cc.whatPartnerSees': 'ما سيراه شريكي',
  'cc.seesConsent': 'الفئات التي تفعّلها فقط. لا شيء آخر.',
  'cc.ruleTitle': 'كيف تعمل المشاركة',
  'cc.rule1': 'يملك كل شخص حسابًا خاصًا منفصلًا.',
  'cc.rule2': 'لا تتم أي مشاركة قبل موافقتكما.',
  'cc.rule3': 'يحق لأي منكما سحب الموافقة في أي وقت.',
  'cc.rule4': 'السحب يوقف الوصول المستقبلي ولا يمحو ما رُى سابقًا بشكل مشروع.',
  'cc.bothConsent': 'يجب موافقة الزوجين قبل مشاركة أي شيء.',
  'cc.demoPartner': 'شريك تجريبي',
  'cc.combinedTitle': 'العرض المشترك',
  'cc.combinedBody':
    'عند وجود سجلين مشتركين، يمكن لجين كلايري عرض حالة الحامل المتداخلة. إنها معلومات تعليمية للنقاش مع المرشد — وليست حكمًا على التوافق.',
  'cc.never': 'لا يخبر جين كلاير أحدًا بالزواج أو الإنجاب.',

  'pc.title': 'موافقة مشاركة الشريك',
  'pc.lead': 'أنت تقرر بدقة ما يستطيع شريكك رؤيته.',
  'pc.scope': 'اختر ما تريد مشاركته',
  'pc.optSummary': 'ملخص الحامل المشترك',
  'pc.optSummaryBody': 'نتائج الحامل المكتوبة بلغة بسيطة فقط.',
  'pc.optFull': 'الوصول إلى التقرير الكامل',
  'pc.optFullBody': 'يسمح لشريكك بفتح تقريرك كاملًا.',
  'pc.optActivity': 'إشعارات النشاط',
  'pc.optActivityBody': 'أخبره عند إضافة نتيجة جديدة.',
  'pc.grant': 'منح الوصول',
  'pc.revoke': 'سحب الوصول',
  'pc.none': 'لا شيء مشترك حاليًا.',
  'pc.expires': 'تم تسجيل الموافقة',
  'pc.revokeWarning': 'السحب يوقف الوصول فورًا ولا يزيل ما رُى سابقًا.',
  'pc.saved': 'تم حفظ خيارات موافقتك.',
  'pc.withdrawTitle': 'سحب الموافقة',
  'pc.withdrawBody': 'يمكنك إيقاف المشاركة في أي وقت ولأي سبب دون تبرير.',

  'sup.title': 'الإرشاد الوراثي',
  'sup.helpSub': 'نحن هنا لمساعدتك.',
  'sup.lead': 'تحدث مع مؤهل لشرح معنى نتائجك في حالتك.',
  'sup.whyTitle': 'متى يفيدك الإرشاد',
  'sup.why1': 'تريد شرح الأرقام بما يناسب حالتك.',
  'sup.why2': 'لديكما نتائج تودّان قراءتها معًا.',
  'sup.why3': 'أثارت نتيجة قلقك أو تركتك غير متأكد من الخطوة التالية.',
  'sup.book': 'طلب مكالمة',
  'sup.message': 'إرسال رسالة',
  'sup.faq': 'الأسئلة الشائعة',
  'sup.contact': 'تواصل معنا',
  'sup.liveChat': 'محادثة مباشرة',
  'sup.available': 'متاحة 24/7',
  'sup.demoNote':
    'للعرض فقط — لا يتم حجز موعد حقيقي ولا إرسال أي رسالة من هذا النموذج.',
  'sup.directoryTitle': 'دليل المرشدين',
  'sup.directoryNote': 'مدخلات توضيحية لأغراض التصميم. ليست دليلًا حقيقيًا.',
  'sup.emergency':
    'إذا شعرت بعدم الارتياح أو قلقًا بشأن حالة صحية عاجلة، فتواصل مع طبيبك أو خدمات الطوارئ المحلية. جين كلايري ليس خدمة طوارئ.',

  'prof.title': 'الملف الشخصي',
  'prof.myReports': 'تقاريري',
  'prof.familyAccess': 'وصول العائلة',
  'prof.privacySettings': 'إعدادات الخصوصية',
  'prof.about': 'عن جين كلايري',
  'prof.notifications': 'الإشعارات',
  'prof.activity': 'سجل النشاط',
  'prof.memberSince': 'عضو منذ',

  'set.title': 'الإعدادات',
  'set.language': 'اللغة',
  'set.notifications': 'الإشعارات',
  'set.privacySecurity': 'الخصوصية والأمان',
  'set.dataSharing': 'مشاركة البيانات',
  'set.aboutApp': 'عن التطبيق',
  'set.helpSupport': 'المساعدة والدعم',

  'priv.title': 'الخصوصية والأمان',
  'priv.lead': 'تحكّم في كيفية التعامل مع معلوماتك.',
  'priv.profileVisibility': 'ظهور الملف',
  'priv.profileVisibilitySub': 'أنت وحدك من يرى بيانات ملفك.',
  'priv.shareResearch': 'المشاركة في بيانات مجهولة',
  'priv.shareResearchSub': 'إيقاف افتراضيًا. لا تغادر أي بيانات هذا النموذج على أي حال.',
  'priv.autoLock': 'قفل التطبيق تلقائيًا',
  'priv.autoLockSub': 'اطلب تسجيل الدخول مجددًا بعد 15 دقيقة من الخمول.',
  'priv.export': 'تصدير بياناتي',
  'priv.exportSub': 'نزّل نسخة من كل ما يُمسك عنك.',
  'priv.erase': 'حذف حسابي',
  'priv.eraseSub': 'إزالة حسابك وسجلاتك نهائيًا.',
  'priv.eraseConfirm':
    'لا يخزّن هذا النموذج بيانات على خادم، لذا لا يوجد ما يُحذف. في المنتج الحقيقي سيكون هذا غير قابل للتراجع.',
  'priv.partnersTitle': 'وصول الشريك',
  'priv.noPartner': 'لا يملك أي شريك وصولًا إلى سجلاتك.',
  'priv.manage': 'إدارة المشاركة',
  'priv.logTitle': 'سجل الخصوصية',
  'priv.logNote': 'يُسجَّل كل تغيير في الموافقة هنا.',

  'notif.title': 'الإشعارات',
  'notif.empty': 'أنت على اطلاع بكل شيء.',
  'notif.markRead': 'تحديد الكل كمقروء',
  'notif.markOne': 'تحديد كمقروء',
  'notif.unread': 'غير مقروء',
  'notif.allRead': 'تم تحديد كل الإشعارات كمقروءة.',

  'act2.title': 'سجل النشاط',
  'act2.lead': 'سجل لما حدث في حسابك.',
  'act2.empty': 'لا يوجد نشاط مسجل بعد.',
  'act2.signedIn': 'تسجيل دخول',
  'act2.consentGranted': 'منح الوصول لشريك',
  'act2.consentRevoked': 'سحب الوصول من شريك',
  'act2.reportViewed': 'عرض التقرير',
  'act2.settingsChanged': 'تغيير الإعدادات',
  'act2.languageChanged': 'تغيير اللغة',
  'act2.note': 'يبقى النشاط على هذا الجهاز فقط.',


  'done.title': 'كل شيء جاهز!',
  'done.body': 'شكرًا لاختيارك جين كلايري. رحلتك الصحية مهمة.',

  'nav.demo': 'نموذج تجريبي',
  'notice.sampleHeading': 'بيانات توضيحية',
  'notice.sampleBody':
    'كل نتيجة واسم ورقم في هذا النموذج مثال أصلي أُنشئ للعرض. لا شيء هنا نتيجة فحص حقيقية.',
  'notice.notDiagnostic': 'ليس تشخيصًا',
  'notice.backHome': 'العودة إلى البداية',

  'err.title': 'تعذّر العثور على هذه الشاشة.',
  'err.body': 'الصفحة المطلوبة غير موجودة في هذا النموذج.',
}

export const catalogs = { en, ar }
